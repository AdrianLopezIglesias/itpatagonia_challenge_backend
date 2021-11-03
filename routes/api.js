var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemon')

/**
 * @swagger
 * /api/pokemon/:
 *   get:
 *     summary: Gets an index list of Pokemon and some of theyr main attributes.
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The number of items to skip before starting to collect the result set
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The numbers of items to return
 *     responses:
 *       200:
 *         description: A list of pokemons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
*/
router.get('/pokemon', pokemonController.index)


/**
 * @swagger
 * /api/pokemon/{id}:
 *   get:
 *     summary: Gets data of an specific pokemon based on its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The id number of the Pokemon.
 *     responses:
 *       200:
 *         description: A detail of the selected pokemon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
*/
router.get('/pokemon/:id', pokemonController.show)

module.exports = router; 