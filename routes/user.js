const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const User = require("../models/user");

const mongoose = require("mongoose");
const { getMaxListeners } = require("../models/user");

// Routes

// JWT authentication routes

router.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

router.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
});

// router.post("/api/login", (req, res) => {
//   // Mock user
//   const user = {
//     id: 1,
//     username: "brad",
//     email: "brad@gmail.com",
//   };

//   jwt.sign({ user }, "secretKey", { expiresIn: "1d" }, (err, token) => {
//     res.json({
//       token,
//     });
//   });
// });

// FORMAT OF TOKEN
// Authorizatio: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus("403");
  }
}

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

// router.get("/test", (req, res) => {
//   const user = req.params;
//   console.log(user);

//   User.find({ username: "jag" })
//     .then((data) => {
//       console.log("Data: ", data);
//       res.json(data);
//     })
//     .catch((error) => {
//       console.log("error: ", error);
//     });
// });

// Needs to be post to pass in body/data
router.post("/login", (req, res) => {
  console.log("body: ", req.body);
  const email = req.body.email;
  const password = req.body.password;

  const user = {
    email: email,
    password: password,
  };

  User.find({ email: email, password: password })
    .then((data) => {
      jwt.sign({ user }, "secretKey", { expiresIn: "1d" }, (err, token) => {
        res.json({
          token,
          data,
        });
      });

      // res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.get("/:id", (req, res, next) => {
  console.log(req.params);

  const id = req.params.id;

  User.find({ _id: id })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
      next();
    });
});

// Delete and Put

router.delete("/:id", (req, res) => {
  console.log(req.body);
  const id = req.params.id;

  User.findByIdAndRemove(id, function (err) {
    if (err) throw err;

    // we have deleted the user
    console.log("User deleted!");
    res.status(200).json({ msg: "Yes mate, deleted!" });
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log("UPDATED parameters: ", req.body);
  const id = req.params.id;
  const body = req.body;

  User.findByIdAndUpdate(id, body, function (err, user) {
    if (err) throw err;

    res.status(200).json({ msg: "Yes mate, updated!" });
  });
});

// router.get("/:id", (req, res) => {
//   console.log(req.params);

//   const id = req.params.id;

//   User.find({ _id: id })
//     .then((data) => {
//       console.log(data);
//       res.json(data);
//     })
//     .catch((error) => {
//       console.log("error: ", error);
//     });
// });
// { "real_name" : "Heroku Server" }, // specifies the document to update
// {
//   $set: {  "real_name" : "New name"}
// }

module.exports = router;
