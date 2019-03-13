import {
    makeExecutableSchema,
    // addMockFunctionsToSchema, // we'll use this later
} from 'graphql-tools';

export const typeDefs = `
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

const schema = makeExecutableSchema({ typeDefs });

export { schema };