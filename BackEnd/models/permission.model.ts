import mongoose from "mongoose";
import Module from "./module.model";
import IPermission from "./interfaces/permission.interface";

const permissionSchema: mongoose.Schema = new mongoose.Schema<IPermission>({
  name: {
    type: String,
    required: true,
  },
  modules: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
  ],
});

const Permission = mongoose.model("Permission", permissionSchema);

export default Permission;
