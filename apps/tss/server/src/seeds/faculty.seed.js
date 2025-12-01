/* eslint n/no-process-exit: "off" */
import { Faculty } from "../models/faculty.model.js";

import seedFaculties from "./data/faculty.json" with { type: "json" };
import { logger } from "@shared/utils/logger";

export const seed = async () => {
  try {
    await Faculty.deleteMany();

    for (const faculty of seedFaculties) {
      await Faculty.create(faculty);
    }
  } catch (error) {
    logger.error("[SEED] Error", error);
  }
};
