import request from "supertest";
import { describe, test, expect } from "vitest";
import app from "../src/app.js";

describe("Health API", () => {
  test("GET /api/health returns ok status", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
