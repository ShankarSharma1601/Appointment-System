const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
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

// APPLY DOCTOR || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;
