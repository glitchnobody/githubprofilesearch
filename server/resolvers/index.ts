import { booksQueryResolver } from "./books.resolver";

export const resolvers = {
  Query: {
    ...booksQueryResolver,
  },
};

  