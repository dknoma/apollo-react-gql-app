import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// Apollo & GQL
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
// Routes
import AppRouter from './routes'

const cache = new InMemoryCache();
// const apolloClientLink = new HttpLink({ uri: 'http://localhost:9090/graphql' })

// URL for the graphql server
const apolloClientLink = createHttpLink({
  uri: 'http://127.0.0.1:9090/graphql'
});

const client = new ApolloClient({
    cache,
    link: apolloClientLink
});  // Apollo client

// Add apollo to our app
ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();