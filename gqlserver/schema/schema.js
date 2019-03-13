// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

exports.typeDefs = `
type Query {
   getProfile(id: ID): Profile
   getProfileList: [Profile]   # "[]" means this is a list of profiles
}

type Mutation {
    signup(firstname: String!, lastname: String!, email: String!): Profile
    login(email: String!): Profile
}

type Profile {
   id: ID!                # "!" denotes a required field
   firstname: String!
   lastname: String!
   email: String!
}

type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
}
`;

// TESTING
const users = [
    {
        id: 1,
        firstname: 'bob',
        lastname: 'bobberson',
        email: 'bobberson@bob.bob',
        password: 'bobby',
    },
    {
        id: 2,
        firstname: 'Hemjryu',
        lastname: 'Dlong',
        email: 'hdlong@bob.bob',
        password: 'bobby',
    },
];

exports.resolvers = {
    Query: {
        getProfileList: () => users,
    },
};
