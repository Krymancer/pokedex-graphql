import If from "@/components/if";
import client from "@/graphql/client";
import { GET_POKEMON } from "@/graphql/query";
import useMounted from "@/hooks/useMounted";

const Pokemon = ({ pokemon }: any) => {
  const mounted = useMounted();
  return (
    <>
      {/* Ensure the nodes are rendered once mounted */}
      <If condition={mounted}>
        <h1>{`Name: ${pokemon.name}`}</h1>
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
