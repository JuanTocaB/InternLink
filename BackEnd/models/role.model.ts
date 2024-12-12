import mongoose from "mongoose";
import IRole from "./interfaces/role.interface";

const roleSchema: mongoose.Schema = new mongoose.Schema<IRole>({
  name: {
    type: String,
    required: true,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Permission",
      required: true,
    },
  ],
});

const Role = mongoose.model("Role", roleSchema);

export default Role;
