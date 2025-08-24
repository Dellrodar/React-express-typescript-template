import express from "express";
import cors from "cors";
import helmet from "helmet";
import health from "./routes/health.js";
import example from "./routes/example.js";
const app = express();
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/health", health);
app.use("/api/example", example);
export default app;
//# sourceMappingURL=app.js.map