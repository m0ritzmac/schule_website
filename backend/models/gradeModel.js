const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema({
  grade: Number,
  subject: String,
  teacher: {
    firstName: String,
    lastName: String,
  },
});

module.exports = mongoose.model("Grade", gradeSchema);
