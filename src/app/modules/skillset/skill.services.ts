import { Skill } from "./skill.model";

const CreateSkillIntoDb = async (payload: string) => {
  console.log({ payload });
  const result = await Skill.create(payload);
  console.log("result", result);
  return result;
};

const getAllSkillFromDb = async () => {
  const allSkill = await Skill.find();
  return allSkill;
};
const DeleteProjectFromDb = async (skillId: string) => {
  const deleteSkill = await Skill.findByIdAndDelete(skillId);
  return deleteSkill;
};

export const SkillServices = {
  CreateSkillIntoDb,
  getAllSkillFromDb,
  DeleteProjectFromDb,
};
