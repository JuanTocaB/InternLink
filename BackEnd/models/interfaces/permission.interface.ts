import { Document } from "mongoose";

interface IPermission {
  name: string;
  modules: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface IPermissionDocument extends Document {
  name: string;
  modules: string[];
  createdAt: Date;
  updatedAt: Date;
}

export default IPermission;

export { IPermissionDocument };
