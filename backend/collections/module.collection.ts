import { IModuleDocument } from "../models/interfaces/module.interface";
import ModuleRepository from "../repositories/module.repository";

const ModuleCollection = async (pagination: any, filters: any) => {
  const modules: IModuleDocument[] = (await ModuleRepository.index(
    pagination,
    filters,
  )) as IModuleDocument[];

  return modules.map((module) => {
    return {
      id: module.id,
      name: module.name,
      createdAt: module.createdAt,
      updatedAt: module.updatedAt,
    };
  });
};

export default ModuleCollection;
