import { ApolloProvider } from "@apollo/client";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useState, createContext } from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import client from "@/graphql/client";
import GlobalStyles, { defaultTheme } from "@/styles/global";

import { wrapper } from "@/state/store";

export const Context = createContext({
  theme: defaultTheme,
  setTheme: (value: DefaultTheme) => {},
  typeFilter: "all",
  setTypeFilter: (value: string) => {},
});

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);
  const [typeFilter, setTypeFilter] = useState("all");

  const ctx = {
    theme,
    setTheme,
    typeFilter,
    setTypeFilter,
  };

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Context.Provider value={ctx}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Context.Provider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
