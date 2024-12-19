import { Request, Response, NextFunction } from "express";
import JsonResponse from "../responses/response";
import { verifyToken } from "../services/auth.service";
import TokenRepository from "../repositories/token.repository";

const authenticate = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const token = request.headers.authorization?.split(" ")[1];
  if (!token) {
    JsonResponse.error(response, "Unauthorized", 401);
    return;
  }

  const blackListToken = await TokenRepository.showByToken(token);

  if (blackListToken !== null) {
    JsonResponse.error(response, "Forbidden", 403);
    return;
  } else {
    try {
      const user = verifyToken(token);
      (request as any).user = user;
      next();
    } catch (error) {
      JsonResponse.error(response, "Forbidden", 403);
      return;
    }
  }
};

export { authenticate };
