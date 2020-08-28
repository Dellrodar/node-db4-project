
exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Zucchini Bread Waffles" },
    { name: "The Best Chicken and Rice"},
    { name: "Sour Watermelon Jell-O Shots in a Watermelon Rind" },
    { name: "Bacon, Egg and Cheese Breakfast Burgers" },
    { name: "Skirt Steak Fajitas" },
    { name: "Almost-Famous Chimichangas" },
    { name: "Ree Drummond's Meatloaf" },
    { name: "Scalloped Potatoes" },
    { name: "Southern Fried Chicken Parmesan" },
  ])
};
