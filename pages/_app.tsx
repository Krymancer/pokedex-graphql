import { ApolloProvider } from "@apollo/client";

import { AppProvider } from "@/state/context";
import client from "@/graphql/client";

import { DefaultTheme, ThemeProvider } from "styled-components";

import "../styles/globals.css";
import GlobalStyles from "../styles/global";

import type { AppProps } from "next/app";
import { useState, createContext } from "react";

export const Context = createContext({
  theme: {
    backgroundColor: "red",
  },
  setTheme: (value: DefaultTheme) => {},
});

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<DefaultTheme>({
    backgroundColor: "#fff",
  });

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AppProvider>
          <Context.Provider value={{ theme, setTheme }}>
            <GlobalStyles />
            <Component {...pageProps} />
          </Context.Provider>
        </AppProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
