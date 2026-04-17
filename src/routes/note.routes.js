import express from "express";
import { createNote, createNotesBulk, getAllNotes, getNoteById, replaceNote, updateNote } from "../controllers/note.controller.js";
import { deleteNote } from "../controllers/note.controller.js";
import { deleteNotesBulk } from "../controllers/note.controller.js";
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.post("/bulk", createNotesBulk);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/bulk", deleteNotesBulk);
router.delete("/:id", deleteNote);
export default router;