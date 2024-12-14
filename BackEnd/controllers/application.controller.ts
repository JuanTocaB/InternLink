import Repository from "../repositories/application.repository";
import ApplicationResource from "../resource/application.resource";
import ApplicationCollection from "../collections/application.collection";
import JsonResponse from "../responses/response";
import IController from "./interface.controller";
import type { Request, Response } from "express";

const ApplicationController: IController = {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const pagination = request.body.pagination;
      const filters = request.body.filters;
      const applications = await ApplicationCollection(pagination, filters);
      return JsonResponse.success(
        response,
        applications,
        "Applications retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const application = await ApplicationResource(id);
      return JsonResponse.success(
        response,
        application,
        "Application retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const application = await Repository.store(data);
      return JsonResponse.success(
        response,
        application,
        "Application created successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const data = request.body;
      const application = await Repository.update(id, data);
      return JsonResponse.success(
        response,
        application,
        "Application updated successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const application = await Repository.remove(id);
      return JsonResponse.success(
        response,
        application,
        "Application removed successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },
};

export default ApplicationController;
