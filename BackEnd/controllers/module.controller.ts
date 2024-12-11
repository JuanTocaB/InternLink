import Repository from "../repositories/module.repository";
import JsonResponse from "../responses/response";
import type { Request, Response } from "express";

const ModuleController = {
  async index(response: Response): Promise<Response> {
    try {
      const modules = await Repository.index();
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
      const module = await Repository.show(id);
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

  async remove(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const module = await Repository.delete(id);
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
