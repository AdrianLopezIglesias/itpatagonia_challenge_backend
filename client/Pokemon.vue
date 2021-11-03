<template lang="pug">
div
	.container-fluid
		div
			br
			h2 Pokedex
			br
			div(class="row"  v-if="status != 'loading'" )
				div(class="col-6")
					table.table
						tbody()
							tr
								td ID
								td {{ pokemon.basic_information.id }}
							tr
								td Nombre
								td {{ pokemon.basic_information.name }}
							tr
								td Peso
								td {{ pokemon.basic_information.weight }}
							tr
								td Movements
								td
									div(v-for="(mov, indx) in pokemon.movements", :key="indx") 
										p {{ mov }}

							tr
								td Abilidades
								td
									div(v-for="(ab, indx) in pokemon.basic_information.abilities", :key="indx") 
										p {{ ab.ability.name }}
							tr
								td Description
								td
									div(v-for="(desc, indx) in pokemon.description", :key="indx") 
										p {{ desc.flavor_text }}
				div(class="col-6")
					img(:src="pokemon.basic_information.photo")
			div( v-if="status == 'loading'" )
				p Cargando datos. Esta operación puede tardar varios segundos...
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
			pokemon: {},
			status: "loading"
     
    };
  },
  mounted() {
		this.getpokemon()

  },
  methods: {
		getpokemon(){
			let url = '/api/pokemon/' + (this.$route.params.id) 
			axios.get(url).then(x => {
				this.pokemon = x.data; 
				this.status = 'showing'; 
				console.log(x)
				})
		},


  }
};
</script>
