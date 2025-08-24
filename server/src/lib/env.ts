import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(3001),
  LOG_LEVEL: z.enum(["fatal","error","warn","info","debug","trace","silent"]).default("info")
});

export type Env = z.infer<typeof EnvSchema>;
export function loadEnv(): Env { return EnvSchema.parse({ ...process.env }); }
