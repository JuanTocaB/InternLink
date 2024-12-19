import { Request, Response, NextFunction } from "express";
import JsonResponse from "../responses/response";
import Roles from "./roles";

const UserMiddleware = {
  async index(request: Request, response: Response, next: NextFunction) {
    if (!Roles.isAdmin(request, response)) {
      JsonResponse.error(response, "Unauthorized", 401);
      return;
    }
    next();
  },

  async get(request: Request, response: Response, next: NextFunction) {
    if (!Roles.isAdmin(request, response)) {
      JsonResponse.error(response, "Unauthorized", 401);
      return;
    }
    next();
  },

  async create(request: Request, response: Response, next: NextFunction) {
    if (!Roles.isAdmin(request, response)) {
      JsonResponse.error(response, "Unauthorized", 401);
      return;
    }
    next();
  },

  async update(request: Request, response: Response, next: NextFunction) {
    if (!Roles.isAdmin(request, response)) {
      JsonResponse.error(response, "Unauthorized", 401);
      return;
    }
    next();
  },

  async delete(request: Request, response: Response, next: NextFunction) {
    if (!Roles.isAdmin(request, response)) {
      JsonResponse.error(response, "Unauthorized", 401);
      return;
    }
    next();
  },
};

export default UserMiddleware;
