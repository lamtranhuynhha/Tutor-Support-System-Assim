import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: {
      // MSSV or MSCB
      type: String,
      required: true,
      unique: true,
    },

    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
      required: true,
    },

    major: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Major",
      required: true,
    },
    mail: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ["student", "tutor"],
      default: "student",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    avatar: {
      publicId: {
        type: String,
        default: "avtdf_kvmacl",
      },
    },
  },
  { timestamps: true, discriminatorKey: "role" }
);

export const User = mongoose.model("User", userSchema);
