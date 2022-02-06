const bcrypt = require("bcryptjs");
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

  router.post('/signup', async (req, res) => {
    console.log(req.body)
    let { email, password, name } = req.body;

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    if(hash) {
        const newUser = {name , email, password: hash}
        const newUserDb = await Users.create(newUser);
        console.log(newUserDb);
        res.json({user: newUserDb, message: "new user created successfully"}).status(201);
    }
})  
module.exports = router;
