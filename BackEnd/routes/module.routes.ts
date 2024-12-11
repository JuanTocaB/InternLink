import Router from "express";
import validateRequest from "../requests/request";
import {
  createModuleSchema,
  updateModuleSchema,
} from "../requests/module.request";
import ModuleController from "../controllers/module.controller";
import type { Request, Response } from "express";

const ModuleRouter = Router();

ModuleRouter.get("/", (request: Request, response: Response, next) => {
  ModuleController.index(response).catch(next);
});

ModuleRouter.get("/:id", (request: Request, response: Response, next) => {
  ModuleController.get(request, response).catch(next);
});

ModuleRouter.post(
  "/",
  validateRequest(createModuleSchema),
  (request: Request, response: Response, next) => {
    ModuleController.create(request, response).catch(next);
  },
);

ModuleRouter.put(
  "/:id",
  validateRequest(updateModuleSchema),
  (request: Request, response: Response, next) => {
    ModuleController.update(request, response).catch(next);
  },
);

ModuleRouter.delete("/:id", (request: Request, response: Response, next) => {
  ModuleController.remove(request, response).catch(next);
});

export default ModuleRouter;
