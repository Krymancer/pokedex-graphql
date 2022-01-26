import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { GET_POKEMONS } from '@/graphql/query';
import { Pokemon } from '@/types/pokemon';

/**
 * Hook to fetch pokemons data with `useLazyQuery`
 * @param {Pokemon[]} initialPokemons The initial pokemons data to use for the first time
 * @returns {Object} The result from the data fetching
 */
const usePokemons = (initialPokemons : Pokemon[]) => {
  const [pokemons, setPokemons] = useState(initialPokemons);
  const [getPokemons, { data, loading, error }] = useLazyQuery(GET_POKEMONS);
  useEffect(() => {
    const newPokemons = data?.pokemons?.results;
    if (newPokemons) setPokemons((pokemons: Pokemon[]) => [...pokemons, ...newPokemons]);
  }, [data]);

  return { loading, error, pokemons, getPokemons };
};

export default usePokemons;
