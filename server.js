// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
// process.env.PORT tells Heroku to use it's own port?
// Step 1
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

// const MONGODB_URI =
//   "mongodb+srv://andrewhulme:MerryChristmas@swipeandshop.rtrxp.mongodb.net/test?retryWrites=true&w=majority";

//Step 2
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swipe_and_shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
app.use("/api", routes);

// Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
