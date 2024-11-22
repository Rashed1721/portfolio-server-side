import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.services";
import httpStatus from "http-status";

const CreateSkill = catchAsync(async (req, res) => {
  const projectData = req.body;
  console.log({ projectData });
  const result = await SkillServices.CreateSkillIntoDb(projectData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "skill is created successfully",
    data: result,
  });
});

const GetAllSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "skill  is retrived successfully",
    data: result,
  });
});

const DeleteSkill = catchAsync(async (req, res) => {
  const { id: skillId } = req.params;
  const result = await SkillServices.DeleteProjectFromDb(skillId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "skill  is Deleted successfully",
    data: result,
  });
});

export const SkillControllers = {
  CreateSkill,
  GetAllSkill,
  DeleteSkill,
};
