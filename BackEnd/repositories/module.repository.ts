import Module from "../models/module.model";

const ModuleRepository = {
  async index() {
    try {
      return await Module.find();
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async show(id: string) {
    try {
      return await Module.findById(id);
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async store(data: any) {
    try {
      return await Module.create(data);
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async update(id: string, data: any) {
    try {
      return await Module.findByIdAndUpdate(id, data, { new: true });
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async delete(id: string) {
    try {
      return await Module.findByIdAndDelete(id);
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

export default ModuleRepository;
