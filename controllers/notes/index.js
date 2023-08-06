const getAllNotes = require("./getAllNotes")
const addNote = require("./addNote")
const deleteNote = require("./deleteNote");
const getNotesById = require("./getNotesById");
const updateNoteContent = require("./updateNoteContent")

module.exports = {
    getAllNotes,
    addNote,
    deleteNote,
    getNotesById,
    updateNoteContent
}