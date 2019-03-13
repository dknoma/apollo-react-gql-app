const { ApolloServer, gql } = require('apollo-server');

const { typeDefs, resolvers }  = require('./schema/schema')  // get type defs from schema file
// const resolvers = require('./resolvers/resolvers') // get type defs from schema file

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const users = [
  {
    firstname: 'bob',
    lastname: 'bobberson',
    email: 'bobberson@bob.bob',
    password: 'bobby',
  },
  {
    firstname: 'Hemjryu',
    lastname: 'Dlong',
    email: 'hdlong@bob.bob',
    password: 'bobby',
  },
];

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});