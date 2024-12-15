import Router from "express";
import router from "./routes";
import { authenticate } from "../middlewares/auth.middleware";
import AuthController from "../controllers/auth.controller";
import { Request, Response, NextFunction } from "express";
import validateRequest from "../requests/request";
import {
  logInSchema,
  logOutSchema,
  registerSchema,
} from "../requests/auth.requests";

const routes = Router();

routes.use(
  "/api",
  authenticate,
  (request: Request, response: Response, next: NextFunction) => {
    router(request, response);
  },
);
routes.post(
  "/login",
  validateRequest(logInSchema),
  (request: Request, response: Response, next: NextFunction) => {
    AuthController.logIn(request, response);
  },
);

routes.post(
  "/logout",
  validateRequest(logOutSchema),
  (request: Request, response: Response, next: NextFunction) => {
    AuthController.logOut(request, response);
  },
);

routes.post(
  "/register",
  validateRequest(registerSchema),
  (request: Request, response: Response, next: NextFunction) => {
    AuthController.register(request, response);
  },
);

export default routes;
