import { Document } from "mongoose";

export default interface ImongoTask extends Document {
  text: string;
  day: string;
  reminder: boolean;
}
