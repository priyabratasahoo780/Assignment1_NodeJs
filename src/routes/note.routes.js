import express from "express";
import { createNote, createNotesBulk, getAllNotes } from "../controllers/note.controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.post("/bulk", createNotesBulk);

export default router;