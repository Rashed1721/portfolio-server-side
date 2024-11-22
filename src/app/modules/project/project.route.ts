import express from "express";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

router.post("/create-project", ProjectControllers.createProject);
router.get("/", ProjectControllers.getAllProject);
router.delete("/:id", ProjectControllers.deleteProject);

export const ProjectRoutes = router;
