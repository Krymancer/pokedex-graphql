import { OwnedPokemon } from "@/types/pokemon";


export const getPokemonFromStorage = () => {
  const pokemons = JSON.parse(localStorage.getItem('pokemons') || '[]');
  return pokemons;
}

export const savePokemonToStorage = (pokemon : OwnedPokemon) => {
  const pokemonsData = JSON.parse(localStorage.getItem('pokemons') || '[]');
  const newPokemons = [...pokemonsData, pokemon];
  localStorage.setItem('pokemons', JSON.stringify(newPokemons));
}