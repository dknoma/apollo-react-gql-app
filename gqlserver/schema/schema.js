const { gql } = require("apollo-server");
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
exports.typeDefs = gql`
type Query {
   getProfile(id: Int!): Profile
   getProfileList: [Profile]   # "[]" means this is a list of profiles
}

type Mutation {
    signup(firstname: String!, lastname: String!, email: String!): Profile
    login(email: String!, password: String!): Profile
}

type Profile {
   id: Int!                # "!" denotes a required field
   firstname: String!
   lastname: String!
   email: String!
}

type User {
    id: Int!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
}
`;

// TESTING DUMMY USERS
/*
Use id: Int! when testing non mutation data. if adding Mutation data w/ ID, then use ID!
query getProfile($id: Int!) {
    getProfile(id:$id) {
        id
        firstname
        lastname
        email
    }
}
 */
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

const getProfileById = ({ id }) => {
    return Promise.resolve(profiles.find(p => p.id === id));
}

exports.resolvers = {
    Query: {
        getProfileList: () => profiles,
        // normally use obj, args, context, info, but most of those params are unneeded right now
        // getProfile: (parent, args, users, __) => {args.id},    
        getProfile: (_, { id }, __, ___) => getProfileById({ id: id }), 
    },
    Profile: {
        id: (parent) => parent.id,
        firstname: (parent) => parent.firstname,
        lastname: (parent) => parent.lastname,
        email: (parent) => parent.email,
      }
};
