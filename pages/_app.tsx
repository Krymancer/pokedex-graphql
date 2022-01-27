import { ApolloProvider } from "@apollo/client";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useState, createContext } from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { AppProvider } from "@/state/context";
import client from "@/graphql/client";
import GlobalStyles, { defaultTheme } from "@/styles/global";

import { wrapper } from "@/state/store";

export const Context = createContext({
  theme: defaultTheme,
  setTheme: (value: DefaultTheme) => {},
});

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

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

export default wrapper.withRedux(App);
