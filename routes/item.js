const express = require("express");

const router = express.Router();

const Item = require("../models/item");

const User = require("../models/user");

// Routes

router.get("/", (req, res) => {
  Item.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;

  const newItem = new Item(data);

  newItem.save((error) => {
    // Return response.data false if error otherwise return true
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      res.json(false);
    }

    res.json(true);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Item.find({ _id: id })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.delete("/:id", (req, res) => {
  console.log(req.body);
  const id = req.params.id;

  Item.findByIdAndRemove(id, function (err) {
    if (err) throw err;

    // we have deleted the user
    console.log("Item deleted!");
    res.status(200).json({ msg: "Yes mate, deleted!" });
  });
});

// Update

router.put("/:id", (req, res) => {
  console.log("UPDATED parameters: ", req.body);
  const id = req.params.id;
  const body = req.body;

  Item.findByIdAndUpdate(id, body, function (err, user) {
    if (err) throw err;

    res.status(200).json({ msg: "Yes mate, updated!" });
  });
});

module.exports = router;
