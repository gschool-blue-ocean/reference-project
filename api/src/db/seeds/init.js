export const seed = async (knex) => {
  await knex("tasks").truncate();
  await knex("tasks").insert([
    { description: "Do the dishes" },
    { description: "Walk the dog" },
    { description: "Sweep the floor" },
    { description: "Do your homework" },
    { description: "Beat Elden Ring" },
  ]);
};
