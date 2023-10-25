const express = require("express");
const router = express.Router();
const {
  getTeachers,
  setTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");

router.get("/", getTeachers);

router.post("/", setTeacher);

router.put("/:id", updateTeacher);

router.delete("/:id", deleteTeacher);

module.exports = router;
