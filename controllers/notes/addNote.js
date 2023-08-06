const { Note } = require("../../schema/NotesModel");

const addNote = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;

  const newNote = await Note.create({
    ...body,    
    _id: id,
  });
  res.status(201).json(newNote);
};

module.exports = addNote;