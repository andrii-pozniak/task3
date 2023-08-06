const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    trim: true,
   
    required: [true, "Name is required"],
    default: "Books",
  },
  createData: Date,
 
  id: {
    type: String,
    required: [true, "CategoryId is required"],   
  },
  categoryName: {
    type: String,
    required: [true, "Description is required"],  
  },
  content: {
    type: String,
    minLength: 2,
  }
});

const Note = model("note", noteSchema);

module.exports = { Note };