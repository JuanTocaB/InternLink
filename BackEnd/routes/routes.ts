import Router from "express";
import ModuleRouter from "./module.routes";
import RoleRouter from "./role.routes";
import PermissionRouter from "./permission.routes";

const router = Router();

router.use("/module", ModuleRouter);
router.use("/role", RoleRouter);
router.use("/permission", PermissionRouter);

export default router;
