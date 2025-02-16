import express from "express";

import { BlogControllers } from "./blog.controller";

const router = express.Router();

router.post("/create-blog", BlogControllers.CreateBlog);
router.get("/", BlogControllers.GetAllBlog);
router.get("/:blogId", BlogControllers.GetSingleBlog);
router.delete("/:id", BlogControllers.DeleteAllBlog);

export const BlogRoutes = router;
