const mongoose = require("mongoose");
const { body } = require("express-validator");

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        // Regular expression to validate email format
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email);
      },
      message: "Invalid email format",
    },
  },
  mobile: {
    type: Number,
    required: true,
    validate: {
      validator: function (mobile) {
        // Regular expression to validate mobile number format
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
      },
      message: "Invalid mobile number format",
    },
  },
  city: {
    type: String,
    required: true,
  },
});



const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
