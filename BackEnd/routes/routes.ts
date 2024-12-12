import Router from "express";
import ModuleRouter from "./module.routes";

const router = Router();

router.use("/module", ModuleRouter);

export default router;