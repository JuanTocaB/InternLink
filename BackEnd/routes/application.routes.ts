import Router from "express";
import validateRequest from "../requests/request";
import {
  indexApplicationSchema,
  createApplicationSchema,
  updateApplicationSchema,
} from "../requests/application.request";
import ApplicationController from "../controllers/application.controller";
import type { NextFunction, Request, Response } from "express";
import ApplicationMiddleware from "../middlewares/application.middleware";

const ApplicationRouter = Router();

ApplicationRouter.get(
  "/",
  validateRequest(indexApplicationSchema),
  ApplicationMiddleware.index,
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.index(request, response).catch(next);
  },
);

ApplicationRouter.get(
  "/:id",
  ApplicationMiddleware.get,
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.get(request, response).catch(next);
  },
);

ApplicationRouter.post(
  "/",
  validateRequest(createApplicationSchema),
  ApplicationMiddleware.create,
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.create(request, response).catch(next);
  },
);

ApplicationRouter.put(
  "/:id",
  validateRequest(updateApplicationSchema),
  ApplicationMiddleware.update,
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.update(request, response).catch(next);
  },
);

ApplicationRouter.delete(
  "/:id",
  ApplicationMiddleware.delete,
  (request: Request, response: Response, next: NextFunction) => {
    ApplicationController.delete(request, response).catch(next);
  },
);

export default ApplicationRouter;
