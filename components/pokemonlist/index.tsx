import { Pokemon } from "@/types/pokemon";

import { Container } from "./style";

import Card from "../card";

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div>
      <h1>PokemonList</h1>
      <Container>
        {pokemons?.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={parseInt(pokemon.id)}
            name={pokemon.name}
            image={pokemon.dreamworld}
          />
        ))}
      </Container>
    </div>
  );
};

export default PokemonList;
