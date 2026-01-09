import { createLogger, format, transports } from "winston";

export default createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    http: 4,
  },
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    }),
  ),
  transports: [
    new transports.File({ filename: "test-results/app.log" }),
    new transports.Console({ level: "debug" }),
  ],
});
