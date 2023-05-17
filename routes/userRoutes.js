const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// routes
// LOGIN || POST
router.post("/login", loginController);

// REGISTER || POST
router.post("/register", registerController);

// AUTH || POST
router.post("/getUserData", authMiddleware, authController);

module.exports = router;
