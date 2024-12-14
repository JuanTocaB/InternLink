import Router from "express";
import validateRequest from "../requests/request";
import {
  indexApplicationSchema,
  createApplicationSchema,
  updateApplicationSchema,
} from "../requests/application.request";
import ApplicationController from "../controllers/application.controller";
import type { NextFunction, Request, Response } from "express";

const ApplicationRouter = Router();

ApplicationRouter.get(
  "/",
  validateRequest(indexApplicationSchema),
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.index(request, response).catch(next);
  },
);

ApplicationRouter.get("/:id", (request: Request, response: Response, next) => {
  ApplicationController.get(request, response).catch(next);
});

ApplicationRouter.post(
  "/",
  validateRequest(createApplicationSchema),
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.create(request, response).catch(next);
  },
);

ApplicationRouter.put(
  "/:id",
  validateRequest(updateApplicationSchema),
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.update(request, response).catch(next);
  },
);

ApplicationRouter.delete(
  "/:id",
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.delete(request, response).catch(next);
  },
);

export default ApplicationRouter;
