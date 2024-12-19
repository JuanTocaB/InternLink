import { IPermissionDocument } from "../models/interfaces/permission.interface";
import PermissionRepository from "../repositories/permission.repository";
import ModuleResource from "./module.resource";

const PermissionResource = async (id: string) => {
  const permission: IPermissionDocument = (await PermissionRepository.show(
    id,
  )) as IPermissionDocument;

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
};

export default PermissionResource;
