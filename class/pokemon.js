const axios = require('axios');

class Pokemon {
	constructor(data) {
		this.data = data
		this.id = data.id
		this.name = data.name
		this.type = data.type
		this.weight = data.weight
		this.abilities = data.abilities
		this.photo = data.sprites.front_default
		this.description_url = 'https://pokeapi.co/api/v2/pokemon-species/' + data.id
	}

	getBasicAttributes() {
		return {
			id: this.id,
			name: this.name,
			type: this.type,
			weight: this.weight,
			abilities: this.abilities,
			photo: this.photo
		}
	}

	getMovements() {
		let movements = []
		this.data.moves.forEach(m => {
			movements.push(m.move.name)
		})
		return movements;
	}

	async getDescription() {
		let description = await axios.get(this.description_url)
		let description_es = description.data.flavor_text_entries.filter(f => f.language.name == 'es')
		return description_es
	}

	static async find(id) {
		let pokemon_url = 'https://pokeapi.co/api/v2/pokemon/' + id
		const data = await axios.get(pokemon_url)
		let pokemon = new Pokemon(data.data)
		return pokemon;
	}
}

module.exports = Pokemon; 