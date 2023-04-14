import { it, expect } from "vitest";
import request from "supertest";
import { app } from "../app.js";

it("Should be able to authenticate", async () => {
  const credentials = {
    email: "x@x.com",
    senha: "123",
  };

  const response = await request(app).post("/auth").send(credentials);
  expect(response.status).toEqual(200);
  expect(response.body.token).toEqual(expect.any(String));
});

/* it("Should NOT be able to authenticate if the password is wrong", async () => {
  const credentials = {
    email: "x@x.com",
    senha: "1234",
  };

  const response = await request(app).post("/auth").send(credentials);
  expect(response.status).toEqual(404);
  expect(response.body.error).toEqual("Authentication data error");
});
 */

it("Should be not able to authenticate if the user does not have authorization", async () => {
  const credentials = {
    email: "y@y.com",
    senha: "123",
  };

  const response = await request(app).post("/auth").send(credentials);
  expect(response.status).toEqual(403);
  expect(response.body.error).toEqual("User not authorized");
});
