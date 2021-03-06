// External modules
import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        dreamworld
      }
    }
  }
`;

export const GET_TYPE = gql`
query getType($name: String!) {
  pokemon(name: $name) {
    types {
      type {
        name
      }
    }
  }
}
`;

export const GET_TYPES = gql`
query types {
  types {
    results {
      url
      name
    }
  }
}
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      base_experience
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
