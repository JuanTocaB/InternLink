import Router from "express";
import validateRequest from "../requests/request";
import {
  indexUserSchema,
  createUserSchema,
  updateUserSchema,
} from "../requests/user.request";
import UserController from "../controllers/user.controller";
import type { NextFunction, Request, Response } from "express";

const UserRouter = Router();

UserRouter.get(
  "/",
  validateRequest(indexUserSchema),
  (request: Request, response: Response, next) => {
    UserController.index(request, response).catch(next);
  },
);

UserRouter.get("/:id", (request: Request, response: Response, next) => {
  UserController.get(request, response).catch(next);
});

UserRouter.post(
  "/",
  validateRequest(createUserSchema),
  (request: Request, response: Response, next: NextFunction) => {
    UserController.create(request, response).catch(next);
  },
);

UserRouter.put(
  "/:id",
  validateRequest(updateUserSchema),
  (request: Request, response: Response, next: NextFunction) => {
    UserController.update(request, response).catch(next);
  },
);

UserRouter.delete(
  "/:id",
  (request: Request, response: Response, next: NextFunction) => {
    UserController.delete(request, response).catch(next);
  },
);

export default UserRouter;
