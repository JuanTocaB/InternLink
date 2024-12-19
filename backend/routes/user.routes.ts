import Router from "express";
import validateRequest from "../requests/request";
import {
  indexUserSchema,
  createUserSchema,
  updateUserSchema,
} from "../requests/user.request";
import UserController from "../controllers/user.controller";
import type { NextFunction, Request, Response } from "express";
import UserMiddleware from "../middlewares/user.middleware";

const UserRouter = Router();

UserRouter.get(
  "/",
  validateRequest(indexUserSchema),
  UserMiddleware.index,
  (request: Request, response: Response, next: NextFunction) => {
    UserController.index(request, response).catch(next);
  },
);

UserRouter.get(
  "/:id",
  UserMiddleware.get,
  (request: Request, response: Response, next: NextFunction) => {
    UserController.get(request, response).catch(next);
  },
);

UserRouter.post(
  "/",
  validateRequest(createUserSchema),
  UserMiddleware.create,
  (request: Request, response: Response, next: NextFunction) => {
    UserController.create(request, response).catch(next);
  },
);

UserRouter.put(
  "/:id",
  validateRequest(updateUserSchema),
  UserMiddleware.update,
  (request: Request, response: Response, next: NextFunction) => {
    UserController.update(request, response).catch(next);
  },
);

UserRouter.delete(
  "/:id",
  UserMiddleware.delete,
  (request: Request, response: Response, next: NextFunction) => {
    UserController.delete(request, response).catch(next);
  },
);

export default UserRouter;
