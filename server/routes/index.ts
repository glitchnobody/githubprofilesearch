import express from "express";
import booksRouter from "./books.router";

const router = express.Router();

router.get("/ping", async (req, res) => {
  res.send("Hello world");
});

router.use("/books", booksRouter);

export default router;
