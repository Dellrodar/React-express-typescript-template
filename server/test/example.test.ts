import request from "supertest";
import { describe, test, expect } from "vitest";
import app from "../src/app.js";

describe("Example API", () => {
  test("GET /api/example/greet returns greeting message", async () => {
    const res = await request(app).get("/api/example/greet?name=test");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "hello, test" });
  });

  test("GET /api/example/greet with default name", async () => {
    const res = await request(app).get("/api/example/greet");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "hello, world" });
  });
});
