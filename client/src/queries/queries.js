import { gql } from 'apollo-boost'

export const GetProfileQuery = gql`
  query GetProfileQuery($id: Int!) {
    getProfile(id: $id) {
      id
      firstname
      lastname
      email
    }
  }
`;

export const GetProfileListQuery = gql`
  query GetProfileListQuery {
    getProfileList {
      id
      firstname
      lastname
      email
    }
  }
`;