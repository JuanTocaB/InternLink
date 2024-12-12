import Permission from "../models/permission.model";
import IRepository from "./interface.repository";
import type { Document } from "mongoose";

const PermissionRepository: IRepository = {
  async index(): Promise<Document[]> {
    try {
      return await Permission.find();
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async show(id: string): Promise<Document> {
    try {
      const permission = await Permission.findById(id);

      if (!permission) {
        throw new Error("Permission not found");
      }

      return permission;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async store(data: JSON): Promise<Document> {
    try {
      return await Permission.create(data);
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async update(id: string, data: JSON): Promise<Document> {
    try {
      const permission = await Permission.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!permission) {
        throw new Error("Permission not found");
      }

      return permission;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async remove(id: string): Promise<Document> {
    try {
      const permission = await Permission.findByIdAndDelete(id);

      if (!permission) {
        throw new Error("Permission not found");
      }

      return permission;
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

export default PermissionRepository;
