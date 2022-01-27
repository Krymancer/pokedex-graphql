import { createContext, useContext, useEffect, useState } from "react";
import Head from "next/head";

import usePokemons from "@/hooks/usePokemons";
import { Pokemon } from "@/types/pokemon";
import PokemonList from "@/components/pokemonlist";

type CollectionProps = {
  initialPokemons: Pokemon[];
};

import { Context } from "./_app";
import { DefaultTheme } from "styled-components";

const Collection = ({ initialPokemons }: CollectionProps) => {
  const { theme, setTheme } = useContext(Context);

  useEffect(() => {
    console.log(theme);
    const newTheme: DefaultTheme = {
      backgroundColor: "#fff",
    };

    setTheme(newTheme);
  }, []); // eslint-disable-line

  const pokemons = [
    {
      id: 2,
      name: "bulbasaur",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <PokemonList pokemons={pokemons} />
    </>
  );
};

export default Collection;
