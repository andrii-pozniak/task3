const { Note } = require("../../schema/NotesModel");

const updateNoteContent = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updateNote = await Note.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateNote) {
        return res.status(404).json({
          status: "error",
          code: 404,
          massage: `Note with id = ${id} not found`,
        });
      }
      return res.status(200).json(updateNote);
    } catch (error) {
      next(error);
    }
  };

  module.exports = updateNoteContent;