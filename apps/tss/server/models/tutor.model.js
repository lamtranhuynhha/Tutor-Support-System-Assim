import { User } from "./user.model.js";
import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  teachingStatus: {
    type: String,
    enum: ["active", "inactive", "suspended"],
    default: "active",
  },
  description: {
    type: String,
    trim: true,
    default: "",
  },
});

export const Tutor = User.discriminator("tutor", tutorSchema);
