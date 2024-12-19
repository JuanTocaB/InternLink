import mongoose from "mongoose";
import IInternship from "./interfaces/internship.interface";

const internshipSchema: mongoose.Schema = new mongoose.Schema<IInternship>(
  {
    companyName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    workingHours: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    paymentTime: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Internship = mongoose.model("Internship", internshipSchema);

export default Internship;
