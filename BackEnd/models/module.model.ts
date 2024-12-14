import mongoose from "mongoose";
import IModule from "./interfaces/module.interface";
import Permission from "./permission.model";

const moduleSchema: mongoose.Schema = new mongoose.Schema<IModule>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

moduleSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const moduleId = this._id;

      await Permission.updateMany(
        { modules: moduleId },
        { $pull: { modules: moduleId } },
        { session },
      );
      await session.commitTransaction();
      session.endSession();
      next();
    } catch (error: any) {
      await session.abortTransaction();
      session.endSession();
      next(new Error(error.message));
    }
  },
);

const Module = mongoose.model("Module", moduleSchema);

export default Module;
