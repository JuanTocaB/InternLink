import Router from "express";
import validateRequest from "../requests/request";
import {
  indexRoleSchema,
  createRoleSchema,
  updateRoleSchema,
} from "../requests/role.request";
import RoleController from "../controllers/role.controller";
import type { NextFunction, Request, Response } from "express";
import RoleMiddleware from "../middlewares/role.middleware";

const RoleRouter = Router();

RoleRouter.get(
  "/",
  validateRequest(indexRoleSchema),
  RoleMiddleware.index,
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.index(request, response).catch(next);
  },
);

RoleRouter.get(
  "/:id",
  RoleMiddleware.get,
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.get(request, response).catch(next);
  },
);

RoleRouter.post(
  "/",
  validateRequest(createRoleSchema),
  RoleMiddleware.create,
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.create(request, response).catch(next);
  },
);

RoleRouter.put(
  "/:id",
  validateRequest(updateRoleSchema),
  RoleMiddleware.update,
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.update(request, response).catch(next);
  },
);

RoleRouter.delete(
  "/:id",
  RoleMiddleware.delete,
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.delete(request, response).catch(next);
  },
);

export default RoleRouter;
