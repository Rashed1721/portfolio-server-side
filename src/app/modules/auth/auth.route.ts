import { AuthControllers } from "./auth.controller";
import express from "express";

const router = express.Router();

router.post("/login", AuthControllers.login);

export const AuthRoutes = router;
