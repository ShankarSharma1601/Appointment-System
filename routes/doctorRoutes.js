const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController } = require("../controllers/doctorController");
const router = express.Router();

// POST SINGLE DOCTOR INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

module.exports = router;
