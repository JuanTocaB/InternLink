import Module from "../models/module.model";
import IRepository from "./interface.repository";
import { IndexModuleFields } from "./fields.search";
import Search from "./search";
import paginate from "../collections/paginate";

const ModuleRepository: IRepository = {
  async index(pagination: any, filters: any) {
    try {
      const query: Record<string, any> = {};
      const searchFields = IndexModuleFields;

      const queryFilters = await Search.byTerm(query, filters, searchFields);
      const resultsQuery = Module.find(queryFilters);
      const resultsPaginated = paginate(resultsQuery, pagination);

      return resultsPaginated.exec();
    } catch (error: any) {
      throw error;
    }
  },

  async show(id: string) {
    try {
      const module = await Module.findById(id);

      if (!module) {
        throw new Error("Module not found");
      }

      return module;
    } catch (error: any) {
      throw error;
    }
  },

  async store(data: JSON) {
    try {
      return await Module.create(data);
    } catch (error: any) {
      throw error;
    }
  },

  async update(id: string, data: JSON) {
    try {
      const module = await Module.findByIdAndUpdate(id, data, { new: true });

      if (!module) {
        throw new Error("Module not found");
      }

      return module;
    } catch (error: any) {
      throw error;
    }
  },

  async remove(id: string) {
    try {
      const module = await Module.findByIdAndDelete(id);

      if (!module) {
        throw new Error("Module not found");
      }

      return module;
    } catch (error: any) {
      throw error;
    }
  },
};

export default ModuleRepository;
