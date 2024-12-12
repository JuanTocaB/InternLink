import mongoose from "mongoose";
import IModule from "./interfaces/module.interface";

const moduleSchema: mongoose.Schema = new mongoose.Schema<IModule>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Module = mongoose.model("Module", moduleSchema);

export default Module;
