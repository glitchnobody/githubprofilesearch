import { gql, GraphQLClient } from "graphql-request";
import { appConfig } from "../utils/config";

const GET_USER = gql`
  query ($text: String!) {
    search(query: $text, type: USER, first: 100) {
      nodes {
        ... on User {
          name
          bio
          websiteUrl
          avatarUrl
          email
          login
          url
        }
      }
    }
  }
`;

type GitHubUser = {
  name: String;
  bio: String;
  websiteUrl: String;
  avatarUrl: String;
  email: String;
  login: String;
  url: String;
};

type GetGitHubUserVariables = { text: String };
type GetGitHubUserResponse = { search: GitHubUser };

const githubGqlClient = new GraphQLClient("https://api.github.com/graphql", {
  headers: { Authorization: `Bearer ${appConfig.githubPersonalAccessToken}` },
});

export const githubService = {
  async getUsers(text: String) {
    let data = await githubGqlClient.request<
      GetGitHubUserResponse,
      GetGitHubUserVariables
    >(GET_USER, {
      text: text,
    });
    return data;
  },
};
