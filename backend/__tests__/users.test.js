import { it, expect, beforeAll } from "vitest";
import request from "supertest";
import { app, key } from "../app";
import jwt from "jsonwebtoken";

let token;
beforeAll(() => {
  token = jwt.sign({}, key);
});

it("should be able to list users", async () => {
  const response = await request(app)
    .get("/users")
    .set("Authorization", `Bearer ${token}`);

  expect(response.status).toEqual(200);
  expect(response.body).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        email: expect.any(String),
      }),
    ])
  );
});

it("should user not be able to list users if user is not", async () => {
  const response = await request(app).get("/users");

  expect(response.status).toEqual(401);
});
