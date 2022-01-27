import Head from "next/head";
import { DefaultTheme, ThemeProvider } from "styled-components";

import If from "@/components/if";
import PokemonDetails from "@/components/pokemondetails";
import client from "@/graphql/client";
import { GET_POKEMON } from "@/graphql/query";
import useMounted from "@/hooks/useMounted";
import { PokemonData } from "@/types/pokemon";

import { capitalizeFirstLetter } from "@/utils/functions";

type PokemonProps = {
  pokemon: PokemonData;
};

const Pokemon = ({ pokemon }: PokemonProps) => {
  const mounted = useMounted();

  return (
    <>
      <Head>
        <title>{capitalizeFirstLetter(pokemon.name)}</title>
      </Head>
      <If condition={mounted}>
        <PokemonDetails pokemon={pokemon} />
      </If>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  // Get pokemon name from context
  const { name, image } = context.query;

  // Get pokemon data in the server
  const { data } = await client.query({
    query: GET_POKEMON,
    variables: { name },
  });

  // Add a new `image` property to get Image from home page
  const modifiedPokemon = { ...data.pokemon, image: image ?? null };

  return {
    props: {
      pokemon: modifiedPokemon,
    },
  };
};

export default Pokemon;
