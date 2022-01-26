import Image from "next/image";

import { Pokemon } from "@/types/pokemon";

import { Container, Header, Links, Text } from "./style";

import Card from "../card";
import Pokeball from "../icons/pokeball";
import World from "../icons/world";
import Link from "next/link";

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div>
      <Header>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="pokemon logo"
          width={300}
          height={100}
        />
        <div>Search...</div>
        <Links>
          <Link href="/" passHref={true}>
            <div>
              <World size={5} />
              <Text>World</Text>
            </div>
          </Link>
          <Link href="/collection" passHref={true}>
            <div>
              <Pokeball size={5} />
              <Text>My Pokemons</Text>
            </div>
          </Link>
        </Links>
      </Header>
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
