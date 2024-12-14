import Router from "express";
import validateRequest from "../requests/request";
import {
  indexPermissionSchema,
  createPermissionSchema,
  updatePermissionSchema,
} from "../requests/permission.request";
import PermissionController from "../controllers/permission.controller";
import type { NextFunction, Request, Response } from "express";

const PermissionRouter = Router();

PermissionRouter.get(
  "/",
  validateRequest(indexPermissionSchema),
  (request: Request, response: Response, next) => {
    PermissionController.index(request, response).catch(next);
  },
);

PermissionRouter.get("/:id", (request: Request, response: Response, next) => {
  PermissionController.get(request, response).catch(next);
});

PermissionRouter.post(
  "/",
  validateRequest(createPermissionSchema),
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.create(request, response).catch(next);
  },
);

PermissionRouter.put(
  "/:id",
  validateRequest(updatePermissionSchema),
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.update(request, response).catch(next);
  },
);

PermissionRouter.delete(
  "/:id",
  (request: Request, response: Response, next: NextFunction) => {
    PermissionController.delete(request, response).catch(next);
  },
);

export default PermissionRouter;
