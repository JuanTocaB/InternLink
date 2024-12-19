import Permission from "../models/permission.model";
import IRepository from "./interface.repository";
import { IndexPermissionFields } from "./fields.search";
import Search from "./search";
import paginate from "../collections/paginate";

const PermissionRepository: IRepository = {
  async index(pagination: any, filters: any) {
    try {
      const query: Record<string, any> = {};
      const searchFields = IndexPermissionFields;

      const queryFilters = await Search.byTerm(query, filters, searchFields);
      const resultsQuery = Permission.find(queryFilters);
      const resultsPaginated = paginate(resultsQuery, pagination);

      return await resultsPaginated.exec();
    } catch (error: any) {
      throw error;
    }
  },

  async show(id: string) {
    try {
      const permission = await Permission.findById(id);

      if (!permission) {
        throw new Error("Permission not found");
      }

      return permission;
    } catch (error: any) {
      throw error;
    }
  },

  async store(data: JSON) {
    try {
      return await Permission.create(data);
    } catch (error: any) {
      throw error;
    }
  },

  async update(id: string, data: JSON) {
    try {
      const permission = await Permission.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!permission) {
        throw new Error("Permission not found");
      }

      return permission;
    } catch (error: any) {
      throw error;
    }
  },

  async remove(id: string) {
    try {
      const permission = await Permission.findByIdAndDelete(id);

      if (!permission) {
        throw new Error("Permission not found");
      }

      return permission;
    } catch (error: any) {
      throw error;
    }
  },
};

export default PermissionRepository;
