import fs from "node:fs";
import path from "node:path";
export function getNodePackageTool() {
  const yarnLock = "yarn.lock";
  const packageLock = "package-lock.json";
  const pnpmLock = "pnpm-lock.yaml";
  const root = process.cwd();
  if (fs.existsSync(path.resolve(root, yarnLock))) {
    return "yarn";
  } else if (fs.existsSync(path.resolve(root, packageLock))) {
    return "npm";
  } else if (fs.existsSync(path.resolve(root, pnpmLock))) {
    return "pnpm";
  } else {
    return "";
  }
}
