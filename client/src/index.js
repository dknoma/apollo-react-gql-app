import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// Apollo & GQL
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// Routes
import App from './App';
import AppRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

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
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();