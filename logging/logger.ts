import fs from "node:fs";
import path from "node:path";

const logDirectory = path.resolve(process.cwd(), "logging", "output");
const logFile = path.join(logDirectory, "test-execution.log");

function write(level: string, message: string): void {
  fs.mkdirSync(logDirectory, { recursive: true });
  const line = `${new Date().toISOString()} [${level}] ${message}\n`;
  fs.appendFileSync(logFile, line, "utf8");
  console.log(line.trim());
}

const logger = {
  info: (message: string) => write("INFO", message),
  error: (message: string) => write("ERROR", message),
  warn: (message: string) => write("WARN", message)
};

export default logger;
