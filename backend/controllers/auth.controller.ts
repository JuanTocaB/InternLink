import { Request, Response } from "express";
import {
  comparePasswords,
  generateToken,
  hashPassword,
  verifyRegisterCredentials,
  verifyLoginCredentials,
  addTokenToBlackList,
  verifyHeader,
} from "../services/auth.service";
import IUser from "../models/interfaces/user.interface";
import User from "../models/user.model";
import JsonResponse from "../responses/response";
import UserResource from "../resource/user.resource";
import env from "dotenv";

const AuthController = {
  async logIn(request: Request, response: Response) {
    const { usernameOrEmail, password } = request.body;
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    const validaton = await verifyLoginCredentials(request, user);
    if (!validaton.value)
      return JsonResponse.error(response, validaton.message, validaton.code);

    const token = generateToken(user);
    const id = user?._id?.toString() as string;

    return response.json({
      token: token,
      user: await UserResource(id),
    });
  },

  logOut: async (request: Request, response: Response) => {
    const validHeader = verifyHeader(request);
    if (!validHeader.value)
      return JsonResponse.error(
        response,
        validHeader.message,
        validHeader.code,
      );

    const authHeader: any = request.headers.authorization;
    const token = authHeader.split(" ")[1];

    await addTokenToBlackList(token);
    return JsonResponse.success(response, {}, "Logged out successfully");
  },

  async register(request: Request, response: Response) {
    env.config();
    const validaton = await verifyRegisterCredentials(request);
    if (!validaton.value)
      return JsonResponse.error(response, validaton.message, validaton.code);

    const { username, email, password } = request.body;
    const userRoleId: string = process.env.USER_ROLE_ID as string;

    const newUser: IUser = {
      username: username,
      email: email,
      password: password,
      roles: [userRoleId],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    User.create(newUser);
    return JsonResponse.success(response, {}, "User created successfully");
  },
};

export default AuthController;
