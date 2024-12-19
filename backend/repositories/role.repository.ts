import Role from "../models/role.model";
import IRepository from "./interface.repository";
import { IndexRoleFields } from "./fields.search";
import Search from "./search";
import paginate from "../collections/paginate";

const RoleRepository: IRepository = {
  async index(pagination: any, filters: any) {
    try {
      const query: Record<string, any> = {};
      const searchFields = IndexRoleFields;

      const queryFilters = await Search.byTerm(query, filters, searchFields);
      const resultsQuery = Role.find(queryFilters);
      const resultsPaginated = paginate(resultsQuery, pagination);

      return resultsPaginated.exec();
    } catch (error: any) {
      throw error;
    }
  },

  async show(id: string) {
    try {
      const role = await Role.findById(id);

      if (!role) {
        throw new Error("Role not found");
      }

      return role;
    } catch (error: any) {
      throw error;
    }
  },

  async store(data: JSON) {
    try {
      return await Role.create(data);
    } catch (error: any) {
      throw error;
    }
  },

  async update(id: string, data: JSON) {
    try {
      const role = await Role.findByIdAndUpdate(id, data, { new: true });

      if (!role) {
        throw new Error("Role not found");
      }

      return role;
    } catch (error: any) {
      throw error;
    }
  },

  async remove(id: string) {
    try {
      const role = await Role.findByIdAndDelete(id);

      if (!role) {
        throw new Error("Role not found");
      }

      return role;
    } catch (error: any) {
      throw error;
    }
  },
};

export default RoleRepository;
