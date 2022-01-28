import { getPokemonFromStorage } from "@/state/persist";
import { Pokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";
import { Container, GraphContainer, TypeContainer } from "./style";
import Router from "next/router";
import If from "../if";

import { typeColors } from "@/styles/colors";

type Props = {
  pokemons: PokemonData[];
};

type Graph = {
  type: string;
  quantity: number;
};

type PokemonData = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

const Graph = ({ pokemons }: Props) => {
  const [graphData, setGrahpData] = useState<Graph[]>([]);
  const [maxType, setMaxType] = useState(-1);
  const types = new Map<string, number>();

  useEffect(() => {
    if (pokemons !== undefined) {
      pokemons.forEach((pokemon: any) => {
        pokemon.types.forEach((type: any) => {
          if (types.has(type)) {
            types.set(type, (types.get(type) ?? 0) + 1);
          } else {
            types.set(type, 1);
          }
        });
      });
      const array = Array.from(types, ([type, quantity]) => ({
        type,
        quantity,
      }));

      array.forEach((type) => {
        if (type.quantity > maxType) {
          setMaxType(type.quantity);
        }
      });

      setGrahpData(array);
    } else {
      Router.push("/");
    }
  }, [maxType]); // eslint-disable-line

  if (pokemons?.length <= 0) {
    return null;
  }

  return (
    <If condition={pokemons != undefined}>
      <Container>
        <GraphContainer>
          <h1>Types</h1>
          <div>
            {graphData.map((graph: Graph) => (
              <div key={graph.type}>
                <TypeContainer color={typeColors[graph.type]}>
                  <div>{graph.type.toUpperCase()}</div>
                  <progress value={graph.quantity} max={maxType}>
                    {graph.quantity}
                  </progress>
                  <div>{graph.quantity}</div>
                </TypeContainer>
              </div>
            ))}
          </div>
        </GraphContainer>
      </Container>
    </If>
  );
};

export default Graph;
