import { gql } from 'apollo-boost'

// When creating a mutation use the following format:
//  mutation <desired mutation name>(arg: <argType>)
export const SignUpForAccount = gql`
    mutation SignUpForAccount($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
        signup(firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
            Jwt
        }
    }
`;

export const LoginUser = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            Jwt
        }
    }
`;