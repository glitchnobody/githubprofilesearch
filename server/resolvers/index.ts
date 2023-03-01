import { usersQueryResolver } from "./users.resolver";

export const resolvers = {
  Query: {
    ...usersQueryResolver,
  },
};
