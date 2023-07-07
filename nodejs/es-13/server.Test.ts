import supertest from "supertest";
import app from "./app";
import {test, expect} from "supertest"


const req = supertest(app);

test("GET /planets", async () => {
  const res = await req
    .get("/planets")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(res.body).toBe([{ name: "Mercury" }, { name: "Venus" }]);
});