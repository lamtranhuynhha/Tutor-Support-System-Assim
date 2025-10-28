import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  yearsOfExperience: Number,
});

export const Tutor = mongoose.model("Tutor", tutorSchema);
