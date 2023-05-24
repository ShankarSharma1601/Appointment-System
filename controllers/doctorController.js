const doctorModel = require("../models/doctorModel");

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: `Doctor Data Fetch Success`,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: `Error in Fetching Doctor Deatils`,
    });
  }
};

module.exports = { getDoctorInfoController };
