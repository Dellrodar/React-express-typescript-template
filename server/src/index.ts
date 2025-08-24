import "dotenv/config";
import { loadEnv } from "./lib/env.js";
import { logger } from "./lib/logger.js";
import app from "./app.js";

const env = loadEnv();
const server = app.listen(env.PORT, () => {
  logger.info(`server listening on http://localhost:${env.PORT}`);
});

process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());
