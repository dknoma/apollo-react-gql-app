import { gql } from 'apollo-boost'

export const GetUser = gql`
  query GetUser($jwt: String) {
    getUser(jwt: $jwt) {
      id
      firstname
      lastname
      email
    }
  }
`;

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

export const GetGithubInfo = gql`
  query GetGithubInfo {
    getGithubProfile {
      owner {
        login
        avatar_url
        url
        html_url
        followers_url
        following_url
        starred_url
        company
        location
        email
        bio
      }
    }
  }
`;