import env from "dotenv";
import IUserDocument from "../models/interfaces/user.interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../models/user.model";
import TokenRepository from "../repositories/token.repository";

env.config();
const tokenKey = process.env.JWT_SECRET as string;

const generateToken = (user: any): string => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      roles: user.roles,
    },
    tokenKey,
    { expiresIn: "1h" },
  );
};

const verifyToken = (token: string): any => {
  return jwt.verify(token, tokenKey);
};

const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

const comparePasswords = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

const verifyRegisterCredentials = async (request: Request) => {
  const { username, email, password } = request.body;
  if (!username || !email || !password) {
    return {
      value: false,
      message: "Please provide all the required fields",
      code: 400,
    };
  }

  if (await User.findOne({ $or: [{ username }, { email }] })) {
    return {
      value: false,
      message: "Username or email already exists",
      code: 400,
    };
  }

  return {
    value: true,
    message: "Credentials are valid",
    code: 200,
  };
};

const verifyLoginCredentials = async (request: Request, user: any) => {
  const { usernameOrEmail, password } = request.body;
  if (!usernameOrEmail || !password) {
    return {
      value: false,
      message: "Please provide all the required fields",
      code: 400,
    };
  }

  if (!user) {
    return {
      value: false,
      message: "Invalid username/email or password",
      code: 400,
    };
  }

  const passwordMatch = await comparePasswords(password, user.password);

  console.log(passwordMatch);

  if (!passwordMatch) {
    console.log(user);
    return {
      value: false,
      message: "Invalid username/email or password",
      code: 400,
    };
  }

  return {
    value: true,
    message: "Credentials are valid",
    code: 200,
  };
};

const addTokenToBlackList = async (token: string) => {
  return await TokenRepository.store(token);
};

const verifyHeader = (req: Request) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return {
      value: false,
      message: "Authorization header is missing",
      code: 400,
    };
  }

  return {
    value: true,
    message: "Authorization header is present",
    code: 200,
  };
};

export {
  generateToken,
  hashPassword,
  comparePasswords,
  verifyToken,
  verifyRegisterCredentials,
  verifyLoginCredentials,
  addTokenToBlackList,
  verifyHeader,
};
