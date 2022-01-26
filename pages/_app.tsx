import { ApolloProvider } from "@apollo/client";

import { AppProvider } from "@/state/context";
import client from "@/graphql/client";

import "../styles/globals.css";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  );
};

export default App;
