import Router from "express";
import ModuleRouter from "./module.routes";

const router = Router();

router.use("/modules", ModuleRouter);

export default router;