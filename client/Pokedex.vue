<template lang="pug">
	div
		.container-fluid
			div
				br
				h2 Pokedex
				br
				div(class="row")
					div(class="col-6" )
						div(v-if="currentPage != 1" )
							a(href="#" @click="prevPage" class="btn btn-outline-secondary") Volver a la página anterior
					div(class="col-6")
						div(class="d-flex justify-content-end")
							a(href="#" @click="nextPage" class="btn btn-outline-secondary") Ver siguiente página
				br
				div
					table.table
						thead
							tr
								th Foto
								th ID
								th Nombre
								th Peso
								th Abilidades
								th Más detalles
						tbody( v-if="status != 'loading'" )
							tr(v-for="(pokemon, index) in pokemons", :key="index") 
								td 
									img(:src="pokemon.photo")
								td {{ pokemon.id }}
								td {{ pokemon.name }}
								td {{ pokemon.weight }}
								td
									div(v-for="(ab, indx) in pokemon.abilities", :key=indx) 
										p {{ ab.ability.name }}
								td
									<router-link class="btn btn-outline-secondary"  :to="{name: 'pokemon_detail', params: {id: pokemon.id}  }">Ver</router-link>
				div( v-if="status == 'loading'" )
					p Cargando datos. Esta operación puede tardar varios segundos...




</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
			pokemons: [],
			currentPage: 2, 
			status: "loading"
     
    };
  },
  mounted() {
		this.getPokemons()

  },
  methods: {
		getPokemons(){
			let url = '/api/pokemon?offset=' + ((this.currentPage*10)-10) 
			axios.get(url).then(x => {
				this.pokemons = x.data; 
				this.status = 'showing'; 
				console.log(x)
				})
		},
		nextPage(){
			this.currentPage ++ ;
			this.status = 'loading'; 
			this.getPokemons();
		},
		prevPage(){
			this.currentPage -- ;
			this.status = 'loading'; 
			this.getPokemons();
		}

  }
};
</script>
