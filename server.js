// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();

// process.env.PORT tells Heroku to use it's own port
// Step 1
const PORT = process.env.PORT || 8080;

// import routes
const routes = require("./routes/api");
const userRouter = require("./routes/user");
const itemRouter = require("./routes/item");

// const MONGODB_URI =
//   "mongodb+srv://andrewhulme:MerryChristmas@swipeandshop.rtrxp.mongodb.net/SwipeAndShop?retryWrites=true&w=majority";

//Step 2
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/swipe_and_shop",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// HTTP request logger
app.use(morgan("tiny"));

// Route setup
app.use("/api", routes);
app.use("/user", userRouter);
app.use("/item", itemRouter);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
