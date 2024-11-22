import express from "express";
import { SkillControllers } from "./skill.controller";

const router = express.Router();

router.post("/create-skill", SkillControllers.CreateSkill);
router.get("/", SkillControllers.GetAllSkill);
router.delete("/:id", SkillControllers.DeleteSkill);

export const SkillRoutes = router;
