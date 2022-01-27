export interface Pokemon {
  id: number;
  name: string;
  dreamworld: string;
};

interface Abilities {
  ability: {
    name: string;
  }
};

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  }
};

interface Move {
  move: {
    name: string;
  }
};

interface Type {
  type: {
    name: string;
  }
};

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  image?: string;
  weight: number;
  base_experience: number;
  abilities: Abilities[];
  moves: Move[];
  sprites: {  
    front_default: string;
  };
  stats: Stat[];
  types: Type[];
};