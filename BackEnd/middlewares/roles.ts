import { Request, Response } from "express";
import IUser from "../models/interfaces/user.interface";
import env from "dotenv";

env.config();

const Role = {
  async isAdmin(request: Request, response: Response) {
    const user: IUser = (request as any).user;
    const adminRole = process.env.ADMIN_ROLE_ID as string;
    const roles = user.roles;

    return roles.includes(adminRole);
  },

  async isUser(request: Request, response: Response) {
    const user: IUser = (request as any).user;
    const userRole = process.env.USER_ROLE_ID as string;
    const roles = user.roles;

    return roles.includes(userRole);
  },
};

export default Role;
