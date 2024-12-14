import Internship from "../models/internship.model";
import IRepository from "./interface.repository";
import { IndexInternshipFields } from "./fields.search";
import Search from "./search";
import paginate from "../collections/paginate";

const InternshipRepository: IRepository = {
  async index(pagination: any, filters: any) {
    try {
      const query: Record<string, any> = {};
      const searchFields = IndexInternshipFields;

      const queryFilters = await Search.byTerm(query, filters, searchFields);
      const resultsQuery = Internship.find(queryFilters);
      const resultsPaginated = paginate(resultsQuery, pagination);

      return resultsPaginated.exec();
    } catch (error: any) {
      throw error;
    }
  },

  async show(id: string) {
    try {
      const internship = await Internship.findById(id);

      if (!internship) {
        throw new Error("Internship not found");
      }

      return internship;
    } catch (error: any) {
      throw error;
    }
  },

  async store(data: JSON) {
    try {
      return await Internship.create(data);
    } catch (error: any) {
      throw error;
    }
  },

  async update(id: string, data: JSON) {
    try {
      const internship = await Internship.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!internship) {
        throw new Error("Internship not found");
      }

      return internship;
    } catch (error: any) {
      throw error;
    }
  },

  async remove(id: string) {
    try {
      const internship = await Internship.findByIdAndDelete(id);

      if (!internship) {
        throw new Error("Internship not found");
      }

      return internship;
    } catch (error: any) {
      throw error;
    }
  },
};

export default InternshipRepository;
