import { booksService } from "../services/books.service";

export const booksQueryResolver = {
  books() {
    return booksService.getBooks();
  },
};
