// apolloClient.js
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpsLink = new HttpLink({
  uri: import.meta.env.VITE_HASURA_URI,
  headers: {
    'x-hasura-admin-secret': import.meta.env.VITE_HASURA_ADMIN_SECRET,
  },
});

export const client = new ApolloClient({
  link: httpsLink,
  cache: new InMemoryCache(),
});
