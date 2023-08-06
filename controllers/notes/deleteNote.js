const { Note } = require("../../schema/NotesModel");

const deleteNote = async (req, res, next) => {

    const { id } = req.params;

    const result = await Note.findByIdAndRemove(id)
        if (!result) {
            res.status(404).json({massage: "Not found"})
            return;
        }
    res.status(200).json(result);

}

module.exports = deleteNote;