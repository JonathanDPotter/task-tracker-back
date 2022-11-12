import { Schema, model } from "mongoose";
import Itask from "../interfaces/task";

const TaskSchema = new Schema({
  text: { type: String, required: true },
  day: { type: String, required: true },
  reminder: { type: Boolean, required: true },
});

export default model<Itask>("User", TaskSchema);
