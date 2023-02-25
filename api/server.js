import express from "express";
import postgres from "postgres";

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());

app.get("/api/tasks", (req, res) => {
  sql`SELECT * FROM tasks`.then((rows) => {
    res.send(rows);
  });
});

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;

  sql`DELETE FROM tasks WHERE id=${id}`.then((rows) => {
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
