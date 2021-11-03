const axios = require('axios');
const Pokemon = require('../class/pokemon')

module.exports = {

	//====================INDEX METHOD====================
	index(req, res) {
		limit = req.query.limit ? req.query.limit : 10
		offset = req.query.offset ? req.query.offset : 0

		let url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset
		let pokemons_raw = []
		let pokemon_processed = [];

		axios.get(url).then(x => {
			x.data.results.forEach(y => {
				pokemons_raw.push(axios.get(y.url))
			})

			Promise.all(pokemons_raw).then(function (values) {
				values.forEach(z => {
					pokemon_processed.push((new Pokemon(z.data).getBasicAttributes()));
				})
				res.status(200).send(pokemon_processed);

			}).catch(error => res.status(400).send(error))
		}).catch(error => res.status(400).send(error))
	},


	//====================SHOW METHOD====================
	async show(req, res) {
		let pokemon = await Pokemon.find(req.params.id)
		let description = await pokemon.getDescription()

		let final_result = {
			basic_information: pokemon.getBasicAttributes(),
			description: description,
			movements: pokemon.getMovements()
		}

		res.status(200).send(final_result);
	}

};