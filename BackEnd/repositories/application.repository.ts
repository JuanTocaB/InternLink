import Application from "../models/application.model";
import IRepository from "./interface.repository";
import { IndexApplicationFields } from "./fields.search";
import Search from "./search";
import paginate from "../collections/paginate";

const ApplicationRepository: IRepository = {
  async index(pagination: any, filters: any) {
    try {
      const query: Record<string, any> = {};
      const searchFields = IndexApplicationFields;

      const queryFilters = await Search.byTerm(query, filters, searchFields);
      const resultsQuery = Application.find(queryFilters);
      const resultsPaginated = paginate(resultsQuery, pagination);

      return resultsPaginated.exec();
    } catch (error: any) {
      throw error;
    }
  },

  async show(id: string) {
    try {
      const application = await Application.findById(id);

      if (!application) {
        throw new Error("Application not found");
      }

      return application;
    } catch (error: any) {
      throw error;
    }
  },

  async store(data: JSON) {
    try {
      return await Application.create(data);
    } catch (error: any) {
      throw error;
    }
  },

  async update(id: string, data: JSON) {
    try {
      const application = await Application.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!application) {
        throw new Error("Application not found");
      }

      return application;
    } catch (error: any) {
      throw error;
    }
  },

  async remove(id: string) {
    try {
      const application = await Application.findByIdAndDelete(id);

      if (!application) {
        throw new Error("Application not found");
      }

      return application;
    } catch (error: any) {
      throw error;
    }
  },
};

export default ApplicationRepository;
