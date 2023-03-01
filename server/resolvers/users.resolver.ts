import { text } from "body-parser";
import { githubService } from "../services/github.service";

export const usersQueryResolver = {
  usersForSearch: (text: string) => {
    return githubService.getUsers(text);
  },
};
