import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ($text: String!) {
    search(query: $text, type: USER, first: 10) {
      nodes {
        ... on User {
          name
          bio
          websiteUrl
          avatarUrl
          email
          id
          url
        }
      }
    }
  }
`;
