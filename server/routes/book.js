const express = require("express");
const router = express.Router();

const { createBook } = require("../controller/book");

router.route("/books").post(createBook);

module.exports = router;
