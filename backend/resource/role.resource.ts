import { IRoleDocument } from "../models/interfaces/role.interface";
import RoleRepository from "../repositories/role.repository";
import PermissionResource from "./permission.resource";

const RoleResource = async (id: string) => {
  const role: IRoleDocument = (await RoleRepository.show(id)) as IRoleDocument;

  const permissions = await Promise.all(
    role.permissions.map(async (id: string) => {
      const permission = await PermissionResource(id);
      return {
        id: permission.id,
        name: permission.name,
        modules: permission.modules,
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
};

export default RoleResource;
