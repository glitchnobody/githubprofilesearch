export const typeDefs = `#graphql

type GitHubUser{
  name: String
  bio: String
  websiteUrl: String
  avatarUrl: String
  email: String
  login: String
  url: String
}

 
 type Query {
    usersForSearch:[GitHubUser]
  }

`;
