/* eslint n/no-process-exit: "off" */
import { Major } from "../models/major.model.js";
import { Faculty } from "../models/faculty.model.js";

import seedMajors from "./data/major.json" with { type: "json" };
import { logger } from "@shared/utils/logger";

export const seed = async () => {
  try {
    await Major.deleteMany();

    for (const major of seedMajors) {
      const faculty = await Faculty.findOne({ abbreviation: major.faculty });
      await Major.create({
        name: major.name,
        abbreviation: major.abbreviation,
        faculty: faculty._id,
      });
    }
  } catch (error) {
    logger.error("[SEED] Error", error);
  }
};
