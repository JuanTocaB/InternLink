import { Request, Response, NextFunction } from "express";
import JsonResponse from "../responses/response";
import Roles from "./roles";

const InternShipMiddleware = {
  async index(request: Request, response: Response, next: NextFunction) {
    if (await Roles.isAdmin(request, response)) {
      next();
      return;
    }

    if (await Roles.isUser(request, response)) {
      next();
      return;
    }
  },

  async get(request: Request, response: Response, next: NextFunction) {
    if (await Roles.isAdmin(request, response)) {
      next();
      return;
    }
    if (await Roles.isUser(request, response)) {
      next();
      return;
    }
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

export default InternShipMiddleware;
