type GitHubUser = {
  name: String;
  bio: String;
  websiteUrl: String;
  avatarUrl: String;
  email: String;
  id: String;
  url: String;
};
export type GetGitHubUsersResponse = { GitHubUsers: GitHubUser[] };
