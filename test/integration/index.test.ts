import { server } from "../../src/index";

describe("Server initialization", () => {
  afterAll(async () => {
    server.close();
  });

  test("Server should be running", () => {
    expect(server.listening).toBe(true);
  });
});
