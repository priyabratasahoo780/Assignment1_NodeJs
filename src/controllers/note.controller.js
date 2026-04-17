import Note from "../models/note.model.js";
import mongoose from "mongoose";

export const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    const note = await Note.create({
      title,
      content,
      category,
      isPinned,
    });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};



export const createNotesBulk = async (req, res) => {
  try {
    const notes = req.body?.notes;

    // Validation
    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Notes array is required in the request body and cannot be empty",
        data: null,
      });
    }

    const createdNotes = await Note.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${createdNotes.length} notes created successfully`,
      data: createdNotes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};



export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};





export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    // ❗ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
        data: null,
      });
    }

    const note = await Note.findById(id);

    // ❗ If not found
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      data: note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};



export const replaceNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, isPinned } = req.body;

    // ❗ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
        data: null,
      });
    }

    // ❗ Validate required fields (PUT requires ALL)
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content, category, isPinned },
      {
        new: true,
        overwrite: true,
        runValidators: true,
      }
    );

    // ❗ Not found
    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note replaced successfully",
      data: updatedNote,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};



export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // ❗ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
        data: null,
      });
    }

    // ❗ Empty body check (IMPORTANT)
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided to update",
        data: null,
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    // ❗ Not found
    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};