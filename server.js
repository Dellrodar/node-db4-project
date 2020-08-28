const express = require('express');

const RecipesRouter = require('./routers/recipes-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

module.exports = server;