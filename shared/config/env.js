/* global process */
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load .env from the project root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  VITE_ENV: process.env.VITE_ENV,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
  NATS_URL: process.env.NATS_SERVER,
  NATS_STREAM: process.env.NATS_STREAM,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
};
