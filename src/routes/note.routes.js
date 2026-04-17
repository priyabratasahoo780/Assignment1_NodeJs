import express from "express";
import { createNote, createNotesBulk } from "../controllers/note.controller.js";

const router = express.Router();

router.post("/", createNote);
router.post("/bulk", createNotesBulk);

export default router;