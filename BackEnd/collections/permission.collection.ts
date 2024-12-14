import { IPermissionDocument } from "../models/interfaces/permission.interface";
import PermissionRepository from "../repositories/permission.repository";
import ModuleResource from "../resource/module.resource";

const PermissionCollection = async (pagination: any, filters: any) => {
  const permissions: IPermissionDocument[] = (await PermissionRepository.index(
    pagination,
    filters,
  )) as IPermissionDocument[];

  return await Promise.all(
    permissions.map(async (permission) => {
      const modules = await Promise.all(
        permission.modules.map(async (id: string) => {
          const module = await ModuleResource(id);
          return {
            id: module.id,
            name: module.name,
          };
        }),
      );
      return {
        id: permission.id,
        name: permission.name,
        modules: modules,
        createdAt: permission.createdAt,
        updatedAt: permission.updatedAt,
      };
    }),
  );
};

export default PermissionCollection;
