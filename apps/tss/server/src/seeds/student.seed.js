/* eslint n/no-process-exit: "off" */
import { Faculty } from "../models/faculty.model.js";
import { Major } from "../models/major.model.js";
import { Student } from "../models/student.model.js";

import seedStudents from "./data/student.json" with { type: "json" };
import { logger } from "@shared/utils/logger";

export const seed = async () => {
  try {
    await Student.deleteMany();

    for (const student of seedStudents) {
      const faculty = await Faculty.findOne({ abbreviation: student.faculty });
      if (!faculty) {
        logger.error("Not found faculty", student.faculty);
      }
      const major = await Major.findOne({ abbreviation: student.major });
      if (!major) {
        logger.error("Not found major", student.major);
      }
      await Student.create({
        ...student,
        faculty: faculty._id,
        major: major._id,
      });
    }
  } catch (error) {
    logger.error("[SEED] Error", error);
  }
};
