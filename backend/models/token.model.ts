import mongoose from "mongoose";
import IToken from "./interfaces/token.interface";

const tokenSchema: mongoose.Schema = new mongoose.Schema<IToken>(
  {
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Token = mongoose.model("Token", tokenSchema);

export default Token;
