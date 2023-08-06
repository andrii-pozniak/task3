const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require('../../helpers');
const { getAllNotes, addNote, deleteNote, getNotesById, updateNoteContent } = require("../../controllers/notes");
const { validation } = require("../../middleware")
const { joiNoteAddSchema, joiChangeContentSchema } = require("../../schema/validationJoi")

router.get("/", ctrlWrapper(getAllNotes));

router.post("/", validation(joiNoteAddSchema), ctrlWrapper(addNote));

router.delete("/:id", ctrlWrapper(deleteNote));

router.get("/:id", ctrlWrapper(getNotesById));

router.patch("/:id", validation(joiChangeContentSchema), ctrlWrapper(updateNoteContent));



module.exports = router;