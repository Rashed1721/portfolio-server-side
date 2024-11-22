import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>({
  img: {
    type: String,
    required: [true, "img is required"],
  },
  headLine: {
    type: String,
    required: [true, "headLine is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  liveLink: {
    type: String,
    required: [true, "liveLink is required"],
  },
  gitLink: {
    type: String,
    required: [true, "gitLink is required"],
  },
});

export const Project = model<TProject>("Project", projectSchema);
