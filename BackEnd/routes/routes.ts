import Router from "express";
import ModuleRouter from "./module.routes";
import RoleRouter from "./role.routes";
import PermissionRouter from "./permission.routes";
import UserRouter from "./user.routes";
import InternshipRouter from "./internship.routes";
import ApplicationRouter from "./application.routes";

const router = Router();

router.use("/module", ModuleRouter);
router.use("/role", RoleRouter);
router.use("/permission", PermissionRouter);
router.use("/user", UserRouter);
router.use("/internship", InternshipRouter);
router.use("/application", ApplicationRouter);

export default router;
