import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  degreeLevel: {
    type: String,
    enum: ["associate", "bachelor", "master", "doctorate", "exchange", "foundation"],
    default: "bachelor",
  },
  year: Number,
});

export const Student = mongoose.model("Student", studentSchema);
