import Router from "express";
import validateRequest from "../requests/request";
import {
  indexInternshipSchema,
  createInternshipSchema,
  updateInternshipSchema,
} from "../requests/internship.request";
import InternshipController from "../controllers/internship.controller";
import type { NextFunction, Request, Response } from "express";
import InternShipMiddleware from "../middlewares/internship.middleware";

const InternshipRouter = Router();

InternshipRouter.get(
  "/",
  validateRequest(indexInternshipSchema),
  InternShipMiddleware.index,
  (request: Request, response: Response, next: NextFunction) => {
    InternshipController.index(request, response).catch(next);
  },
);

InternshipRouter.get(
  "/:id",
  (request: Request, response: Response, next: NextFunction) => {
    InternshipController.get(request, response).catch(next);
  },
);

InternshipRouter.post(
  "/",
  validateRequest(createInternshipSchema),
  (request: Request, response: Response, next: NextFunction) => {
    InternshipController.create(request, response).catch(next);
  },
);

InternshipRouter.put(
  "/:id",
  validateRequest(updateInternshipSchema),
  (request: Request, response: Response, next: NextFunction) => {
    InternshipController.update(request, response).catch(next);
  },
);

InternshipRouter.delete(
  "/:id",
  (request: Request, response: Response, next: NextFunction) => {
    InternshipController.delete(request, response).catch(next);
  },
);

export default InternshipRouter;
