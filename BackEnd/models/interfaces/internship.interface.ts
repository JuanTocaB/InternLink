import { Document } from "mongoose";

interface IInternship {
  companyName: string;
  address: string;
  description: string;
  workingHours: number;
  requirements: string[];
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
  address: string;
  description: string;
  workingHours: number;
  requirements: string[];
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
