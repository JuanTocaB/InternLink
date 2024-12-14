import mongoose from "mongoose";
import IUser from "./interfaces/user.interface";
import Role from "./role.model";

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Role,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);

export default User;
