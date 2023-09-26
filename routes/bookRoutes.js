import express from "express";
import { getAllBooks } from "../controllers/bookController.js";
import { createBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getAllBooks)

router.post("/", createBook)

export default router;