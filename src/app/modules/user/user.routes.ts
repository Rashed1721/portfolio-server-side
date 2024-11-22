import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();
router.get("/:id", UserControllers.getSinglUser);
router.put("/:id", UserControllers.UpdateUser);
export const UserRoutes = router;
