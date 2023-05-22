const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// PORT
const port = process.env.PORT || 8000;

// Listen port
app.listen(port, () => {
  console.log(
    `Server is Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
  );
});
