import { IModuleDocument } from "../models/interfaces/module.interface";
import ModuleRepository from "../repositories/module.repository";

const ModuleResource = async (id: string) => {
  const module: IModuleDocument = (await ModuleRepository.show(
    id,
  )) as IModuleDocument;

  return {
    id: module.id,
    name: module.name,
    description: module.description,
    createdAt: module.createdAt,
    updatedAt: module.updatedAt,
  };
};

export default ModuleResource;
