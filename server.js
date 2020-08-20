// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = "mongodb+srv://andrewhulme:MerryChristmas@swipeandshop.rtrxp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || "mongodb://localhost/swipe_and_shop", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

// Saving data to our mongo database
const data = {
  title: "Hello!",
  body: "Goodbye!",
};

// .save();

const newBlogPost = new BlogPost(data); //instance of the model

newBlogPost.save((error) => {
  if (error) {
    console.log("Oops, something happened");
  } else {
    console.log("Data has been saved!");
  }
});

// HTTP request logger
app.use(morgan("tiny"));

app.get("/api", (req, res) => {
  const data = {
    username: "accimeesterlin",
    age: 5,
  };
  res.json(data);
});

app.get("/api/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 59,
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
