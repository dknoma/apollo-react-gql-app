import { gql } from 'apollo-boost'

// export const ChannelsListQuery = gql`
//   query ChannelsListQuery {
//     channels {
//       id
//       name
//     }
//   }
// `;

export const GetProfileQuery = gql`
  query GetProfileQuery($id: ID!) {
    profile(id: $id) {
      id
      firstname
      lastname
      email
    }
  }
`;

export const GetProfileListQuery = gql`
  query GetProfileListQuery {
    profiles {
      id
      firstname
      lastname
      email
    }
  }
`;