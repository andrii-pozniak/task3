const { Note } = require("../../schema/NotesModel");

const getNotesById = async (req, res, next) => {

    const { id } = req.params;
    
    if (!req.params.id) {
        res.status(400).json({ error: "Missing ID parameter" });
        return;
      }

    const result = await Note.findById(id)
        if (!result) {
            res.status(404).json({massage: "Not found"})
            return;
        }
    res.status(200).json(result);

}

module.exports = getNotesById;