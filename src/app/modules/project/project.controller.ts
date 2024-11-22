import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";
import httpStatus from "http-status";

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectData = req.body;

    const result = await ProjectServices.createProjectIntoDb(projectData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ProjectServices.getAllProjectFromDb();

    res.status(200).json({
      success: true,
      message: "Projects retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: projectId } = req.params;
    console.log({ projectId });
    const result = await ProjectServices.DeleteProjectFromDb(projectId);

    res.status(200).json({
      success: true,
      message: "Projects deleted successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProjectControllers = {
  createProject,
  getAllProject,
  deleteProject,
};
