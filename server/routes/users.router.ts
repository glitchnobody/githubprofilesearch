import express from "express";
import { githubService } from "../services/github.service";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("req.body", req.body);
  let text = req.body.text;
  let users = await githubService.getUsers(text);
  res.send(JSON.stringify({ data: users }));
});

export default router;
