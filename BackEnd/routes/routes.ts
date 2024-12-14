import Router from "express";
import ModuleRouter from "./module.routes";
import RoleRouter from "./role.routes";
import PermissionRouter from "./permission.routes";
import UserRouter from "./user.routes";

const router = Router();

router.use("/module", ModuleRouter);
router.use("/role", RoleRouter);
router.use("/permission", PermissionRouter);
router.use("/user", UserRouter);

export default router;
