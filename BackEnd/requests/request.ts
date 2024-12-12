import type { ZodSchema } from "zod";
import type { Request, Response } from "express";
import JsonResponse from "../responses/response";

const validateRequest =
  (schema: ZodSchema) =>
  async (request: Request, response: Response, next: any) => {
    try {
      await schema.parseAsync(request.body);
      next();
    } catch (error: any) {
      JsonResponse.requestValidationError(response, error.errors, 500);
    }
  };

export default validateRequest;
