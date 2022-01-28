import Image from "next/image";
import useRandomColor from "@/hooks/useRandomColor";
import { PokemonData } from "@/types/pokemon";

import {
  Contaier,
  Info,
  Stats,
  InfoContainer,
  Moves,
  PokemonTitle,
  CatchButton,
} from "./style";

import Header from "@/components/header";
import { capitalizeFirstLetter } from "@/utils/functions";
import { useContext, useEffect, useState } from "react";

import { Context } from "../../pages/_app";
import { DefaultTheme } from "styled-components";
import Pokeball from "../icons/pokeball";
import { savePokemonToStorage } from "@/state/persist";

type PokemonDetailsProps = {
  pokemon: PokemonData;
};

const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
  const {
    id,
    sprites,
    name,
    image,
    types,
    height,
    weight,
    base_experience,
    abilities,
    stats,
    moves,
  } = pokemon;

  const profileImage = image ?? sprites.front_default;

  const flag = id % 3;
  const { light } = useRandomColor(flag);

  const { theme, setTheme } = useContext(Context);

  useEffect(() => {
    const newTheme: DefaultTheme = {
      backgroundColor: light,
    };

    setTheme(newTheme);
  }, []); // eslint-disable-line

  const [catched, setCatched] = useState(false);

  const handleClick = () => {
    if (!catched) {
      setCatched(true);

      const typesData = types.map((type) => type.type.name);
      const catchPokemon = {
        id,
        name,
        dreamworld: profileImage,
        types: typesData,
      };

      savePokemonToStorage(catchPokemon);
    }
  };

  return (
    <>
      <Header />
      <Contaier backgroundColor={light}>
        <Stats>
          <Image src={profileImage} alt={name} width={200} height={200} />
          <PokemonTitle>
            <span>#{id} </span>
            <span>{capitalizeFirstLetter(name)}</span>
          </PokemonTitle>
          <div>
            <Item
              title="Types"
              text={types
                .map((type) => capitalizeFirstLetter(type.type.name))
                .join(", ")}
            />
            <Item title="Height" text={`${height}"`} />
            <Item title="Weight" text={`${weight} lbs`} />

            <CatchButton onClick={handleClick}>
              <Pokeball size={2} />
              {catched ? "Catched!" : "Catch"}
            </CatchButton>
          </div>
        </Stats>
        <InfoContainer>
          <Info>
            <h1>Info:</h1>
            <Item title="Experience" text={base_experience.toString()} />
            <Item
              title="Abilities"
              text={abilities
                .map((ability) => capitalizeFirstLetter(ability.ability.name))
                .join(", ")}
            />
            <div>
              <h1>Stats:</h1>
              {stats.map((stat) => (
                <Item
                  key={stat.stat.name}
                  title={stat.stat.name}
                  text={stat.base_stat.toString()}
                />
              ))}
            </div>
          </Info>
          <Moves>
            <h1>Moves:</h1>
            <div>
              {moves
                .map((move) => capitalizeFirstLetter(move.move.name))
                .join(", ")}
            </div>
          </Moves>
        </InfoContainer>
      </Contaier>
    </>
  );
};

type ItemProps = {
  title: string;
  text: string;
};

const Item = ({ title, text }: ItemProps) => {
  return (
    <div>
      <span>
        <b>{title}: </b>
        {text}
      </span>
    </div>
  );
};

export default PokemonDetails;
