import Repository from "../repositories/module.repository";
import ModuleResource from "../resource/module.resource";
import ModuleCollection from "../collections/module.collection";
import JsonResponse from "../responses/response";
import IController from "./interface.controller";
import type { Request, Response } from "express";

const ModuleController: IController = {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const pagination = request.body.pagination;
      const filters = request.body.filters;
      const modules = await ModuleCollection(pagination, filters);
      return JsonResponse.success(
        response,
        modules,
        "Modules retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const module = await ModuleResource(id);
      return JsonResponse.success(
        response,
        module,
        "Module retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const module = await Repository.store(data);
      const id: string = module["_id"].toString() as string;
      return JsonResponse.success(
        response,
        module,
        "Module created successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const data = request.body;
      const module = await Repository.update(id, data);
      return JsonResponse.success(
        response,
        module,
        "Module updated successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const module = await Repository.remove(id);
      return JsonResponse.success(
        response,
        module,
        "Module deleted successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },
};

export default ModuleController;