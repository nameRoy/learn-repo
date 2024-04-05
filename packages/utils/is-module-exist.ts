import fs from "node:fs";
import path from "node:path";

export function isModuleExist(moduleName: string) {
  const root = process.cwd();
  const modulesPath = path.resolve(root, "node_modules", moduleName);
  return fs.existsSync(modulesPath);
}
