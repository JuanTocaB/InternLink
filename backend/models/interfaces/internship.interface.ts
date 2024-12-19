import { Document } from "mongoose";

interface IInternship {
  companyName: string;
  userId: string;
  address: string;
  description: string;
  workingHours: number;
  salary: number;
  currency: string;
  paymentTime: string;
  startDate: string;
  endDate: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IInternshipDocument extends Document {
  companyName: string;
  userId: string;
  address: string;
  description: string;
  workingHours: number;
  salary: number;
  currency: string;
  paymentTime: string;
  startDate: string;
  endDate: string;
  createdAt: Date;
  updatedAt: Date;
}

export default IInternship;

export { IInternshipDocument };
