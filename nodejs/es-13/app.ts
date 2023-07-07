import express from "express";
import "express-async-errors";

const app = express();

function getPlanets() {
  const planets = [{ name: "Mercury" }, { name: "Venus" }, { name: "Jupiter" }];

  /* planets.push({ name: "Mars" }); */

  return planets;
}

app.get("/", (req, res) => {
  res.send("This is the Space Facts API!");
});

app.get("/planets", (req, res) => {
  const planets = getPlanets();
  res.json(planets);
});

export default app;