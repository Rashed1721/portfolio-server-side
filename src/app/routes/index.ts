import express from "express";
import { ProjectRoutes } from "../modules/project/project.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { SkillRoutes } from "../modules/skillset/Skill.route";
import { BlogRoutes } from "../modules/blog/blog.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoutes);

export default router;
