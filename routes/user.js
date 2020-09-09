const express = require("express");

const router = express.Router();

const User = require("../models/user");

const mongoose = require("mongoose");

// Routes

router.get("/", (req, res) => {
  User.find({})
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

  const newUser = new User(data);

  newUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }

    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

router.post("/update", (req, res) => {
  var item = {
    password: req.body.password,
  };

  var id = req.body.id;

  mongoose.connect(url, function (err, db) {
    assert.equal(null, err);
    db.collection("user").updateOne({ _id: id }, function (err, result) {
      assert.equal(null, err);
      console.log("Item inserted");
      db.close();
    });
  });
});

router.get("/test", (req, res) => {
  const user = req.params;
  console.log(user);

  User.find({ username: "jag" })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

// router.get("/:id", (req, res) => {
//   console.log(req.params);
//
//   const id = req.params.id;
//
//   User.findById(id, function (err, user) {
//     if (err) throw err;
//
//     // show the one user
//     console.log(user);
//     res.json(user);
//   });
// });

router.get("/:id", (req, res) => {
  console.log(req.params);

  const id = req.params.id;

  User.find({_id: id})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});



// { "real_name" : "Heroku Server" }, // specifies the document to update
// {
//   $set: {  "real_name" : "New name"}
// }

module.exports = router;
