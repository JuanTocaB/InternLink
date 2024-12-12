import Role from "../models/role.model";
import IRepository from "./interface.repository";
import type { Document } from "mongoose";

const RoleRepository: IRepository = {
  async index(): Promise<Document[]> {
    try {
      return await Role.find();
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async show(id: string): Promise<Document> {
    try {
      const role = await Role.findById(id);

      if (!role) {
        throw new Error("Role not found");
      }

      return role;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async store(data: JSON): Promise<Document> {
    try {
      return await Role.create(data);
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async update(id: string, data: JSON): Promise<Document> {
    try {
      const role = await Role.findByIdAndUpdate(id, data, { new: true });

      if (!role) {
        throw new Error("Role not found");
      }

      return role;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async remove(id: string): Promise<Document> {
    try {
      const role = await Role.findByIdAndDelete(id);

      if (!role) {
        throw new Error("Role not found");
      }

      return role;
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

export default RoleRepository;
