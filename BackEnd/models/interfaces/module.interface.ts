import { Document } from "mongoose";

interface IModule {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IModuleDocument extends Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export default IModule;

export { IModuleDocument };
