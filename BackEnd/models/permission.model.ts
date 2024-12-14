import mongoose, { Error } from "mongoose";
import Module from "./module.model";
import IPermission from "./interfaces/permission.interface";
import Role from "./role.model";

const permissionSchema: mongoose.Schema = new mongoose.Schema<IPermission>(
  {
    name: {
      type: String,
      required: true,
    },
    modules: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Module,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

permissionSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const permissionId = this._id;

      await Role.updateMany(
        { permissions: permissionId },
        { $pull: { permissions: permissionId } },
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

const Permission = mongoose.model("Permission", permissionSchema);

export default Permission;
