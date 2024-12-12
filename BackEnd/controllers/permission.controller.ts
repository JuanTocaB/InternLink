import Repository from "../repositories/permission.repository";
import JsonResponse from "../responses/response";
import IController from "./interface.controller";
import type { Request, Response } from "express";

const PermissionController: IController = {
  async index(response: Response): Promise<Response> {
    try {
      const permissions = await Repository.index();
      return JsonResponse.success(
        response,
        permissions,
        "Permissions retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const permission = await Repository.show(id);
      return JsonResponse.success(
        response,
        permission,
        "Permission retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const permission = await Repository.store(data);
      return JsonResponse.success(
        response,
        permission,
        "Permission created successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const data = request.body;
      const permission = await Repository.update(id, data);
      return JsonResponse.success(
        response,
        permission,
        "Permission updated successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const permission = await Repository.remove(id);
      return JsonResponse.success(
        response,
        permission,
        "Permission removed successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },
};

export default PermissionController;
