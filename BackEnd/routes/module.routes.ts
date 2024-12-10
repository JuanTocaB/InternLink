import Router from "express";
import validateRequest from "../requests/request";
import { createModuleSchema, updateModuleSchema } from "../requests/module.request";
import ModuleController from "../controllers/module.controller";

const ModuleRouter = Router();

ModuleRouter.get("/", ModuleController.index);
ModuleRouter.get("/:id", ModuleController.get);
ModuleRouter.post("/", validateRequest(createModuleSchema), ModuleController.create);
ModuleRouter.put("/:id", validateRequest(updateModuleSchema), ModuleController.update);
ModuleRouter.delete("/:id", ModuleController.remove);

export default ModuleRouter;