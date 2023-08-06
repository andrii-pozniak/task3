const express = require("express");
const cors = require("cors");
const notesRouter = require("./routes/api/notes")

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' })
  })
  
  app.use((error, req, res, next) => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({ message, })
  });

module.exports = app;