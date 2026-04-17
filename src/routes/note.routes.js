import express from "express";
import { createNote, createNotesBulk, getAllNotes, getNoteById } from "../controllers/note.controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.post("/bulk", createNotesBulk);
router.get("/:id", getNoteById);

export default router;