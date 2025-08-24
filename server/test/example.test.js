import request from "supertest";
import app from "../src/app.js";
test("GET /api/example/greet", async () => {
    const res = await request(app).get("/api/example/greet?name=test");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "hello, test" });
});
//# sourceMappingURL=example.test.js.map