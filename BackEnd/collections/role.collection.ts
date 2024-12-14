import { IRoleDocument } from "../models/interfaces/role.interface";
import RoleRepository from "../repositories/role.repository";
import PermissionResource from "../resource/permission.resource";

const RoleCollection = async (paginate: any, filters: any) => {
  const roles: IRoleDocument[] = (await RoleRepository.index(
    paginate,
    filters,
  )) as IRoleDocument[];

  return await Promise.all(
    roles.map(async (role) => {
      const permissions = await Promise.all(
        role.permissions.map(async (id: string) => {
          const permission = await PermissionResource(id);
          return {
            id: permission.id,
            name: permission.name,
          };
        }),
      );
      return {
        id: role.id,
        name: role.name,
        permissions: permissions,
        createdAt: role.createdAt,
        updatedAt: role.updatedAt,
      };
    }),
  );
};

export default RoleCollection;
