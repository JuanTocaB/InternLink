import { Document } from "mongoose";

interface IApplication {
  internshipId: string;
  userId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IApplicationDocument extends Document {
  internshipId: string;
  userId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export default IApplication;

export { IApplicationDocument };
