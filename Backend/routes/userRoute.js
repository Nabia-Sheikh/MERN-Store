const express = require("express");
const router = express.Router();
const Users = require("../models/User.js");


router.get("/", async (req, res) => {
    try {
      const usersRecord = await Users.find({});
      res.json(usersRecord).status(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.post("/adduser", async (req, res) => {
    try {
      const newUser = new Users(req.body);
      const savedUser = await newUser.save();
      res.json(savedUser).status(201);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const deletedUser = await Users.findByIdAndDelete(req.params.id);
      res.json(deletedUser).status(200);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Users.findById(id);
      res.json(user).status(200);
    } catch (error) {
      res.status(404).json({ message: "Book not found" });
    }
  });
  
module.exports = router;
