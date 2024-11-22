import { model, Schema } from "mongoose";
import { TSkill } from "./skill.interface";

const SkillSchema = new Schema<TSkill>({
  skill: {
    type: String,
    required: [true, "skill is required"],
  },
});

export const Skill = model<TSkill>("Skill", SkillSchema);
