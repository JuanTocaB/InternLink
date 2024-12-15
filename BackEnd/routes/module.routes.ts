import Router, { request } from "express";
import validateRequest from "../requests/request";
import {
  indexModuleSchema,
  createModuleSchema,
  updateModuleSchema,
} from "../requests/module.request";
import ModuleController from "../controllers/module.controller";
import type { NextFunction, Request, Response } from "express";
import ModuleMiddleware from "../middlewares/module.middleware";

const ModuleRouter = Router();

ModuleRouter.get(
  "/",
  validateRequest(indexModuleSchema),
  ModuleMiddleware.index,
  (request: Request, response: Response, next: NextFunction) => {
    ModuleController.index(request, response).catch(next);
  },
);

ModuleRouter.get(
  "/:id",
  ModuleMiddleware.get,
  (request: Request, response: Response, next: NextFunction) => {
    ModuleController.get(request, response).catch(next);
  },
);

ModuleRouter.post(
  "/",
  validateRequest(createModuleSchema),
  ModuleMiddleware.create,
  (request: Request, response: Response, next: NextFunction) => {
    ModuleController.create(request, response).catch(next);
  },
);

ModuleRouter.put(
  "/:id",
  validateRequest(updateModuleSchema),
  ModuleMiddleware.update,
  (request: Request, response: Response, next: NextFunction) => {
    ModuleController.update(request, response).catch(next);
  },
);

ModuleRouter.delete(
  "/:id",
  ModuleMiddleware.delete,
  (request: Request, response: Response, next: NextFunction) => {
    ModuleController.delete(request, response).catch(next);
  },
);

export default ModuleRouter;
