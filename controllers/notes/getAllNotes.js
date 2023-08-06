const { Note } = require("../../schema/NotesModel");
// const { HttpError } = require("../../helpers/apiHelper");

const getAllNotes = async (req, res) => {
  
  const notes = await Note.find().sort({ createdAt: -1 });

  if (!notes) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(notes);
};

module.exports = getAllNotes;