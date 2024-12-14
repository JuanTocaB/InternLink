import { Document } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface IUserDocument extends Document {
  username: string;
  email: string;
  password: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}

export default IUser;
export { IUserDocument };
