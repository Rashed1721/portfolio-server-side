import { Blog } from "./blog.model";

const CreateBlogIntoDb = async (payload: string) => {
  console.log({ payload });
  const result = await Blog.create(payload);
  console.log("result", result);
  return result;
};

const getAllBlogFromDb = async () => {
  const allSkill = await Blog.find();
  return allSkill;
};

const DeleteBlogFromDb = async (skillId: string) => {
  const deleteblog = await Blog.findByIdAndDelete(skillId);
  return deleteblog;
};

export const BlogServices = {
  CreateBlogIntoDb,
  getAllBlogFromDb,
  DeleteBlogFromDb,
};
