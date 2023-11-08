const express = require("express");
const router = express.Router();
const {
  getGrades,
  setGrade,
  updateGrade,
  deleteGrade,
} = require("../controllers/gradeController");

router.get("/", getGrades);

router.post("/", setGrade);

router.put("/:id", updateGrade);

router.delete("/:id", deleteGrade);

module.exports = router;
