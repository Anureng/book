const Book = require("../Model/Book");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dd8ckn2oz",
  api_key: "822572954714859",
  api_secret: "Z1JhP7NlqSJtVNrwbBJje_Q6ynA",
});

exports.createBook = async (req, res) => {
  try {
    const file = req.files.photo;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });
    const book = await Book.create({
      name: req.body.name,
      description: req.body.description,
      image: result.secure_url,
      number: req.body.number,
    });

    console.log(result);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};
