import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    mail: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String, required: true },
    birthDate: { type: Date },
    gender: { type: String, enum: ["male", "female"] },
    address: { type: String },
    phoneNumber: { type: String, unique: true },
    role: { type: String, enum: ["tutor", "student", "employee"], default: "student" },
    // last login, created at, updated at will be handled by timestamps
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  // Hash password before saving
  if (this.isModified("password")) {
    // Only hash if password is modified
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare password
userSchema.methods.comparePassword = function (pw) {
  return bcrypt.compare(pw, this.password);
};

export const User = mongoose.model("User", userSchema);
