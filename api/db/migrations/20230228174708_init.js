export const up = (knex) => {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.string("description");
  });
};

export const down = (knex) => {
  return knex.schema.dropTable("tasks");
};
