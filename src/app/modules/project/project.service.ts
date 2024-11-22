import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDb = async (projectData: TProject) => {
  const newProject = await Project.create(projectData);
  return newProject;
};

const getAllProjectFromDb = async () => {
  const allProject = await Project.find();
  return allProject;
};
const DeleteProjectFromDb = async (projectId: string) => {
  const deleteProject = await Project.findByIdAndDelete(projectId);
  return deleteProject;
};

export const ProjectServices = {
  createProjectIntoDb,
  getAllProjectFromDb,
  DeleteProjectFromDb,
};
