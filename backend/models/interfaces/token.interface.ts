import { Document } from "mongoose";

interface IToken {
  userId: string;
  token: string;
  createdAt: Date;
}

interface ITokenDocument extends Document {
  userId: string;
  token: string;
  createdAt: Date;
}

export default IToken;

export { ITokenDocument };
