import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  img: {
    type: String,
    required: [true, "img is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
});

export const Blog = model<TBlog>("Blog", blogSchema);
