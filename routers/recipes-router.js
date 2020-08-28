const express = require('express');

const Recipes = require('../models/recipes-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allRecipes = await Recipes.getRecipes()
    res.json(allRecipes);
  } catch(err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await Recipes.getRecipesById(req.params.id)
    res.json(recipe)
  } catch(err) {
    next(err)
  }
});

router.get('/:id/shoppingList', async (req, res, next ) => {
  try {
    const list = await Recipes.getShoppingList(req.params.id)
    res.json(list)
  } catch(err) {
    next(err)
  }
})

router.get('/:id/instructions', async (req, res, next) => {
  try {
    const directions = await Recipes.getInstructions(req.params.id)
    res.json(directions)
  } catch (err) {
    next(err)
  }
})

module.exports = router