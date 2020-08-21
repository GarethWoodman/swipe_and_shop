const express = require("express");

const router = express.Router();

const BlogPost = require("../models/blogPost");

// Routes

router.get("/api", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/api/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 59,
  };
  res.json(data);
});

module.exports = router;