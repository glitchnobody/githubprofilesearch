import { useQuery } from "@tanstack/react-query";
import { GetGitHubUsersResponse } from "../types";
import { appConfig } from "../utils/config";

export const useGitHubUsers = () => {
  return useQuery(
    ["GitHubUsers"],
    async (): Promise<GetGitHubUsersResponse[]> => {
      return fetch(`${appConfig.apiBaseUrl}/users`).then((res) => res.json());
    }
  );
};
