import type { Request, Response } from "express";

interface IController {
  index(request: Request, response: Response): Promise<Response>;
  get(request: Request, response: Response): Promise<Response>;
  create(request: Request, response: Response): Promise<Response>;
  update(request: Request, response: Response): Promise<Response>;
  delete(request: Request, response: Response): Promise<Response>;
}

export default IController;
