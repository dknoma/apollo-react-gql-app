import { gql } from 'apollo-boost'

export const SignUpForAccount = gql`
    mutation SignUpForAccount($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
        user(input: { firstname: $firstname, lastname: $lastname, email: $email, password: $password }) {
            id
            firstname
            lastname
            email
            password
        }
    }
`;