/* eslint n/no-process-exit: "off" */
import { User } from "../models/user.model.js";

import seedUsers from "./data/user.json" with { type: "json" };
import { logger } from "@shared/utils/logger";

export const seed = async () => {
  try {
    await User.deleteMany();

    for (const user of seedUsers) {
      await User.create({ ...user });
    }
  } catch (error) {
    logger.error("[SEED] Error", error);
  }
};
