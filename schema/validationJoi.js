const Joi = require("joi");


const joiNoteAddSchema = Joi.object({
  name: Joi.string().min(2),
  createData: Date,  
  id: Joi.string(),
  categoryName: Joi.string(),
  content: Joi.string().min(2)
});

const joiChangeContentSchema = Joi.object({
  content: Joi.string().min(2),
  dataStart: Date,
  dataEnd: Date,
});


module.exports = { joiNoteAddSchema, joiChangeContentSchema };