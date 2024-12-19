import { Document } from "mongoose";

interface IRole {
  name: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface IRoleDocument extends Document {
  name: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export default IRole;

export { IRoleDocument };
