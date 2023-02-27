import express from "express";
import { booksService } from "../services/books.service";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(booksService.getBooks());
});

export default router;
