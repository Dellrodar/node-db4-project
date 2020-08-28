const db = require("../data/config.js");
const { orderBy } = require("../data/config.js");

function getRecipes() {
  return db("recipes")
};

function getRecipesById(recipe_id) {
  return db("recipes")
  .where("id", recipe_id)
  .first()
};

function getShoppingList(recipe_id) {
  return db("recipes_ingredients as ri")
    .join("ingredients as i", "i.id", "ri.ingredients_id")
    .select("ri.quantity", "i.name" )
    .where("ri.recipes_id", recipe_id)
};

function getInstructions(recipe_id) {
  return db("instructions as i")
  .where("i.recipes_id", recipe_id)
  .orderBy("i.step_number")
};

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
}