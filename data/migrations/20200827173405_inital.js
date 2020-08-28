
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.text("name").notNull();
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("name").notNull();
  });

  await knex.schema.createTable("recipes_ingredients", (table) => {
    table.integer("recipes_id")
    .notNull()
    .references("id")
    .inTable("recipes")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
    table.integer("ingredients_id")
    .notNull()
    .references("id")
    .inTable("ingredients")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
    table.primary(["recipes_id", "ingredients_id"]);
    table.float("quantity").notNull();
  });

  await knex.schema.createTable("instructions", (table) => {
    table.increments("id");
    table.integer("step_number").notNull();
    table.text("instructions").notNull();
    table.integer("recipes_id")
    .notNull()
    .references("id")
    .inTable("recipes")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
  });
};
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("recipes_ingredients");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
