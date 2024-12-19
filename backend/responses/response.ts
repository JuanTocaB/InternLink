import type { Response } from "express";

const JsonResponse = {
  success: (response: Response, data: any, message: string) => {
    return response.status(200).json({
      success: true,
      message,
      data,
    });
  },

  error: (response: Response, message: string, status: number) => {
    return response.status(status).json({
      success: false,
      message,
    });
  },

  requestValidationError: (response: Response, error: any, status: number) => {
    return response.status(status).json({
      success: false,
      error,
    });
  },
};

export default JsonResponse;