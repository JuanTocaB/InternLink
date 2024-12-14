import Repository from "../repositories/role.repository";
import RoleResource from "../resource/role.resource";
import RoleCollection from "../collections/role.collection";
import JsonResponse from "../responses/response";
import IController from "./interface.controller";
import type { Request, Response } from "express";

const RoleController: IController = {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const pagination = request.body.pagination;
      const filters = request.body.filters;
      const roles = await RoleCollection(pagination, filters);
      return JsonResponse.success(
        response,
        roles,
        "Roles retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const role = await RoleResource(id);
      return JsonResponse.success(
        response,
        role,
        "Role retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const role = await Repository.store(data);
      return JsonResponse.success(response, role, "Role created successfully");
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const data = request.body;
      const role = await Repository.update(id, data);
      return JsonResponse.success(response, role, "Role updated successfully");
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const role = await Repository.remove(id);
      return JsonResponse.success(response, role, "Role deleted successfully");
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },
};

export default RoleController;
