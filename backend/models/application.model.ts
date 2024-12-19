import mongoose from "mongoose";
import IApplication from "./interfaces/application.interface";

const applicationSchema: mongoose.Schema = new mongoose.Schema<IApplication>(
  {
    internshipId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
