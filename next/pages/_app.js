import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import '../styles/globals.css'

const LearnLikeSlater = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default LearnLikeSlater
