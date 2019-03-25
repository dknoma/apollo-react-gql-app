import { gql } from 'apollo-boost'

export const GetUser = gql`
  query GetUser($jwt: String) {
    getUser(jwt: $jwt) {
      id
      firstname
      lastname
      email
      title
      location
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

export const GetGitHubUser = gql`
  query GetGitHubUser($id: Int!) {
    getGitHubUser(id: $id) {
      id
      username
      html_url
      avatar_url
      bio
      company
      email
      location
      repos_url
      public_repos
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