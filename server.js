const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// dotenv config
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  req.status(200).send({
    message: "Server is running",
  });
});

// PORT
const port = process.env.PORT || 8080;

// Listen port
app.listen(port, () => {
  console.log(
    `Server is Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
  );
});
