import Image from "next/image";

import { Pokemon } from "@/types/pokemon";

import { Container } from "./style";

import Card from "@/components/card";
import Header from "@/components/header";

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div>
      <Header />
      <Container>
        {pokemons?.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.dreamworld}
          />
        ))}
      </Container>
    </div>
  );
};

export default PokemonList;
