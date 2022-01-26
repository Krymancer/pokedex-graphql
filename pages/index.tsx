import type { NextPage } from "next";

import usePokemons from "@/hooks/usePokemons";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { Pokemon } from "@/types/pokemon";
import If from "@/components/if";
import Loading from "@/components/loading";
import PokemonList from "@/components/pokemonlist";
import client from "@/graphql/client";
import { GET_POKEMONS } from "@/graphql/query";
import { VARIABLES as variables } from "@/graphql/constants";

type HomeProps = {
  initialPokemons: Pokemon[];
};

const Home = ({ initialPokemons }: HomeProps) => {
  // Set initial pokemons data from the server
  // and fetch another pokemons data in the client
  const data = usePokemons(initialPokemons);
  const { loading, error, pokemons, getPokemons } = data;
  useInfiniteScroll(loading, getPokemons);

  return (
    <>
      <If condition={typeof error !== "undefined"}>
        <h1>{`Error! ${error?.message}`}</h1>
      </If>
      <If condition={typeof error === "undefined"}>
        <PokemonList pokemons={pokemons} />
        <If condition={loading}>
          <Loading />
        </If>
      </If>
    </>
  );
};

export const getServerSideProps = async () => {
  // Get initial pokemons data in the server
  const { data } = await client.query({ query: GET_POKEMONS, variables });

  return {
    props: {
      initialPokemons: data.pokemons.results,
    },
  };
};

export default Home;
