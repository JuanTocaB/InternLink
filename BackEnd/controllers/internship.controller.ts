import Repository from "../repositories/internship.repository";
import InternshipResource from "../resource/internship.resource";
import InternshipCollection from "../collections/internship.collection";
import JsonResponse from "../responses/response";
import IController from "./interface.controller";
import type { Request, Response } from "express";

const InternshipController: IController = {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const pagination = request.body.pagination;
      const filters = request.body.filters;
      const internships = await InternshipCollection(pagination, filters);
      return JsonResponse.success(
        response,
        internships,
        "Internships retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const internship = await InternshipResource(id);
      return JsonResponse.success(
        response,
        internship,
        "Internship retrieved successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const internship = await Repository.store(data);
      const id: string = internship["_id"].toString() as string;
      return JsonResponse.success(
        response,
        internship,
        "Internship created successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      const data = request.body;
      const internship = await Repository.update(id, data);
      return JsonResponse.success(
        response,
        internship,
        "Internship updated successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const id: string = request.params.id;
      await Repository.remove(id);
      return JsonResponse.success(
        response,
        {},
        "Internship removed successfully",
      );
    } catch (error: any) {
      return JsonResponse.error(response, error.message, 500);
    }
  },
};

export default InternshipController;
