import handlebars from "handlebars";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const cache = new Map();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_DIR = path.join(__dirname, "..", "templates");

export const loadTemplate = async (templateName, data) => {
  if (cache.has(templateName)) {
    return cache.get(templateName)(data);
  }

  const filePath = path.join(TEMPLATE_DIR, templateName);

  const source = await fs.readFile(filePath, "utf8");

  const compiled = handlebars.compile(source);
  cache.set(templateName, compiled);

  // Render
  return compiled(data);
};
