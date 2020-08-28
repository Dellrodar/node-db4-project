
exports.seed = async function(knex) {
  await knex("instructions").truncate()
  await knex("recipes_ingredients").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
}
