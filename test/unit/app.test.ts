import request from "supertest";
import app from "../../src/app";

describe("Root path", () => {
  test("It should response to the GET method", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(404);
  });
});

describe("GET / users", () => {
  test("It should have a message property", async () => {
    const response = await request(app).get("/users").send();
    expect(response.body.message).toBeDefined();
  });
});
