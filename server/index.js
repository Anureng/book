const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const createBook = require("./routes/book");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(express.json());

const url = process.env.MONGO_URI;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Successfully Connected 😁👌");
  })
  .catch((err) => {
    console.log("Not able to connect to the database", err);
  });

// Create Book Route

app.use("/api", createBook);
