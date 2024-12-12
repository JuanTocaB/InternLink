import Module from "../models/module.model";
import IRepository from "./interface.repository";
import type { Document } from "mongoose";

const ModuleRepository: IRepository = {
  async index(): Promise<Document[]> {
    try {
      return await Module.find();
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async show(id: string): Promise<Document> {
    try {
      const module = await Module.findById(id);

      if (!module) {
        throw new Error("Module not found");
      }

      return module;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async store(data: JSON): Promise<Document> {
    try {
      return await Module.create(data);
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async update(id: string, data: JSON): Promise<Document> {
    try {
      const module = await Module.findByIdAndUpdate(id, data, { new: true });

      if (!module) {
        throw new Error("Module not found");
      }

      return module;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async remove(id: string): Promise<Document> {
    try {
      const module = await Module.findByIdAndDelete(id);

      if (!module) {
        throw new Error("Module not found");
      }

      return module;
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

export default ModuleRepository;
