const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema({
  grade: Number,
  subject: String,
});

module.exports = mongoose.model("Grade", gradeSchema);
