import Router from "express";
import validateRequest from "../requests/request";
import {
  indexRoleSchema,
  createRoleSchema,
  updateRoleSchema,
} from "../requests/role.request";
import RoleController from "../controllers/role.controller";
import type { NextFunction, Request, Response } from "express";

const RoleRouter = Router();

RoleRouter.get(
  "/",
  validateRequest(indexRoleSchema),
  (request: Request, response: Response, next) => {
    RoleController.index(request, response).catch(next);
  },
);

RoleRouter.get("/:id", (request: Request, response: Response, next) => {
  RoleController.get(request, response).catch(next);
});

RoleRouter.post(
  "/",
  validateRequest(createRoleSchema),
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.create(request, response).catch(next);
  },
);

RoleRouter.put(
  "/:id",
  validateRequest(updateRoleSchema),
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.update(request, response).catch(next);
  },
);

RoleRouter.delete(
  "/:id",
  (request: Request, response: Response, next: NextFunction) => {
    RoleController.delete(request, response).catch(next);
  },
);

export default RoleRouter;
