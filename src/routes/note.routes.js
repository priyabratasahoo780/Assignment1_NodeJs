import express from "express";
import { createNote, createNotesBulk, getAllNotes, getNoteById, replaceNote } from "../controllers/note.controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.post("/bulk", createNotesBulk);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);

export default router;