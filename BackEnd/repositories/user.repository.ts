import User from "../models/user.model";
import IRepository from "./interface.repository";
import { IndexUserFields } from "./fields.search";
import Search from "./search";
import paginate from "../collections/paginate";

const UserRepository: IRepository = {
  async index(pagination: any, filters: any) {
    try {
      const query: Record<string, any> = {};
      const searchFields = IndexUserFields;

      const queryFilters = await Search.byTerm(query, filters, searchFields);
      const resultsQuery = User.find(queryFilters);
      const resultsPaginated = paginate(resultsQuery, pagination);

      return resultsPaginated.exec();
    } catch (error: any) {
      throw error;
    }
  },

  async show(id: string) {
    try {
      const user = await User.findById(id);

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error: any) {
      throw error;
    }
  },

  async store(data: JSON) {
    try {
      return await User.create(data);
    } catch (error: any) {
      throw error;
    }
  },

  async update(id: string, data: JSON) {
    try {
      const user = await User.findByIdAndUpdate(id, data, { new: true });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error: any) {
      throw error;
    }
  },

  async remove(id: string) {
    try {
      const user = await User.findByIdAndDelete(id);

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error: any) {
      throw error;
    }
  },
};

export default UserRepository;
