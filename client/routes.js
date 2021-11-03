import Pokedex from './Pokedex.vue'
import Pokemon from './Pokemon.vue'

const routes = [
  { path: '/', component: Pokedex },
  { path: '/pokemon', component: Pokedex },
  { path: '/pokemon/:id', name: 'pokemon_detail', component: Pokemon },
  { path: '/*', component: Pokedex }
]

export default routes; 