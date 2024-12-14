import Repository from "../repositories/user.repository";
import UserResource from "../resource/user.resource";
import UserCollection from "../collections/user.collection";
import JsonResponse from "../responses/response";
import IController from "./interface.controller";
import type { Request, Response } from "express";
import bcrypt from "bcrypt";

const UserController: IController = {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const pagination = request.body.pagination;
      const filters = request.body.filters;
      const users = await UserCollection(pagination, filters);
      return JsonResponse.success(
        response,
        users,
        "Users retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const user = await UserResource(id);
      return JsonResponse.success(
        response,
        user,
        "User retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      data.password = await bcrypt.hash(data.password, 10);
      const user = await Repository.store(data);

      return JsonResponse.success(response, user, "User created successfully");
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const data = request.body;

      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }

      const user = await Repository.update(id, data);

      return JsonResponse.success(response, user, "User updated successfully");
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const user = await Repository.remove(id);
      return JsonResponse.success(response, user, "User deleted successfully");
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },
};

export default UserController;
