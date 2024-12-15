import Router from "express";
import validateRequest from "../requests/request";
import {
  indexPermissionSchema,
  createPermissionSchema,
  updatePermissionSchema,
} from "../requests/permission.request";
import PermissionController from "../controllers/permission.controller";
import type { NextFunction, Request, Response } from "express";
import PermissionMiddleware from "../middlewares/permission.middleware";

const PermissionRouter = Router();

PermissionRouter.get(
  "/",
  validateRequest(indexPermissionSchema),
  PermissionMiddleware.index,
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.index(request, response).catch(next);
  },
);

PermissionRouter.get(
  "/:id",
  PermissionMiddleware.get,
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.get(request, response).catch(next);
  },
);

PermissionRouter.post(
  "/",
  validateRequest(createPermissionSchema),
  PermissionMiddleware.create,
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.create(request, response).catch(next);
  },
);

PermissionRouter.put(
  "/:id",
  validateRequest(updatePermissionSchema),
  PermissionMiddleware.update,
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.update(request, response).catch(next);
  },
);

PermissionRouter.delete(
  "/:id",
  PermissionMiddleware.delete,
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.delete(request, response).catch(next);
  },
);

export default PermissionRouter;
