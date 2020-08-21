// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

// const MONGODB_URI =
//   "mongodb+srv://andrewhulme:MerryChristmas@swipeandshop.rtrxp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect("mongodb://localhost/swipe_and_shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Saving data to our mongo database
// const data = {
//   title: "Hello!",
//   body: "Goodbye!",
// };

// .save();

// const newBlogPost = new BlogPost(data); //instance of the model

// newBlogPost.save((error) => {
//   if (error) {
//     console.log("Oops, something happened");
//   } else {
//     console.log("Data has been saved!");
//   }
// });

// HTTP request logger
app.use(morgan("tiny"));
app.use("/", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
