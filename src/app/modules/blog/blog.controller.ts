import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import httpStatus from "http-status";
import { BlogServices } from "./blog.service";

const CreateBlog = catchAsync(async (req, res) => {
  const projectData = req.body;
  console.log({ projectData });
  const result = await BlogServices.CreateBlogIntoDb(projectData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "blog is created successfully",
    data: result,
  });
});

const GetSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "blogs  are retrived successfully",
    data: result,
  });
});
const GetAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "blogs  are retrived successfully",
    data: result,
  });
});

const DeleteAllBlog = catchAsync(async (req, res) => {
  const { id: blogId } = req.params;
  const result = await BlogServices.DeleteBlogFromDb(blogId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "blog is Deleted successfully",
    data: result,
  });
});

export const BlogControllers = {
  GetAllBlog,
  GetSingleBlog,
  DeleteAllBlog,
  CreateBlog,
};
