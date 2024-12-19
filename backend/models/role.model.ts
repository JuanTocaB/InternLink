import mongoose from "mongoose";
import IRole from "./interfaces/role.interface";
import Permission from "./permission.model";

const roleSchema: mongoose.Schema = new mongoose.Schema<IRole>(
  {
    name: {
      type: String,
      required: true,
    },
    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Permission,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

const Role = mongoose.model("Role", roleSchema);

export default Role;
