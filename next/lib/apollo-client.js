import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache(),
  credentials: 'include'
});

export default client;

export const GET_BOOKS = gql`
  query {
    books {
      id
      name
      slug
    }
  }
`

export const LOGIN_USER = gql` 
  mutation ( $email: String!, $password: String!) {
    authenticateUserWithPassword( email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`

export const GET_CURRENT_USER = gql` 
  query {
    authenticatedItem {
      ... on User {
        name
      }
    }
  }
`

export const LOGOUT_USER = gql`
  mutation { endSession }
`  