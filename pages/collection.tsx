import { useContext, useEffect, useState } from "react";
import Head from "next/head";

import PokemonList from "@/components/pokemonlist";

import { Context } from "./_app";
import { DefaultTheme } from "styled-components";
import { connect } from "react-redux";
import Graph from "@/components/graph";

const Collection = (props: any) => {
  const { theme, setTheme } = useContext(Context);

  useEffect(() => {
    const newTheme: DefaultTheme = {
      backgroundColor: "#fff",
    };
    setTheme(newTheme);
    props.loadDashboard();
  }, []); // eslint-disable-line

  return (
    <>
      <Head>
        <title>My Pokemons</title>
      </Head>
      <PokemonList pokemons={props.ownedPokemons} />
      <Graph pokemons={props.ownedPokemons} />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  ...state,
});

function mapDispatchToProps(dispatch: any): any {
  return {
    loadDashboard: function () {
      return dispatch({ type: "LOAD_DATA" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
