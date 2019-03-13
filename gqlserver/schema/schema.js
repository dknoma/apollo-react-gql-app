const { gql } = require("apollo-server");
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
exports.typeDefs = gql`
type Query {
   getProfile(id: ID!): Profile
   getProfileList: [Profile]   # "[]" means this is a list of profiles
}

type Mutation {
    signup(firstname: String!, lastname: String!, email: String!): Profile
    login(email: String!, password: String!): Profile
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

// TESTING DUMMY USERS
const profiles = [
    {
        id: 1,
        firstname: 'bob',
        lastname: 'bobberson',
        email: 'bobberson@bob.bob',
    },
    {
        id: 2,
        firstname: 'Hemjryu',
        lastname: 'Dlong',
        email: 'hdlong@bob.bob',
    },
];

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

const getProfileById = ({ profileId }) => {
    return Promise.resolve(profiles.find(p => p.id === profileId));
}

exports.resolvers = {
    Query: {
        getProfileList: () => profiles,
        // normally use obj, args, context, info, but most of those params are unneeded right now
        // getProfile: (parent, args, users, __) => {args.id},    
        getProfile: (_, { id }) => getProfileById({ id: id }), 
    },
    Profile: {
        id: (parent) => parent.id,
        firstname: (parent) => parent.firstname,
        lastname: (parent) => parent.lastname,
        email: (parent) => parent.email,
      }
};
