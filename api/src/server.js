import express from "express";
import db from "./db/db.js";

const app = express();

app.use(express.json());

app.get("/api/tasks", async (req, res, next) => {
  const rows = await db.table("tasks").select().catch(next);
  res.send(rows);
});

app.get("/api/tasks/:id", async (req, res, next) => {
  const rows = await db
    .table("tasks")
    .select()
    .where("id", req.params.id)
    .catch(next);
  if (rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(rows[0]);
  }
});

app.post("/api/tasks", async (req, res, next) => {
  const { description } = req.body;

  const rows = await db.table("tasks").insert({ description }).catch(next);
  res.send(rows);
});

app.delete("/api/tasks/:id", async (req, res, next) => {
  const { id } = req.params;

  await db.table("tasks").where("id", id).delete().catch(next);
  res.sendStatus(204);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

export default app;
