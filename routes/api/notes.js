const express = require("express");
const router = express.Router();
const {ctrlWrapper} = require('../../helpers');
const {getAllNotes} = require("../../controllers/notes")

router.get("/", ctrlWrapper(getAllNotes));

module.exports = router;