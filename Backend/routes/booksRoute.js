// all books routes
const express = require("express");
const router = express.Router();
const Books = require("../models/Book.js");

router.get("/", async (req, res) => {
  try {
    const booksRecord = await Books.find({});
    res.json(booksRecord).status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/addbook", async (req, res) => {
  try {
    const newBook = new Books(req.body);
    const savedBook = await newBook.save();
    res.json(savedBook).status(201);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Books.findByIdAndDelete(req.params.id);
    res.json(deletedBook).status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findById(id);
    res.json(book).status(200);
  } catch (error) {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports = router;
