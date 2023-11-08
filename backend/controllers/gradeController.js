const asyncHandler = require("express-async-handler");

const Grade = require("../models/gradeModel");

const getGrades = asyncHandler(async (req, res) => {
  const grades = await Grade.find();

  res.status(200).json(grades);
});

const setGrade = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add content");
  }

  const grade = await Grade.create({
    grade: req.body.grade,
    subject: req.body.subject,
  });

  res.status(200).json({
    message: "Created grade succesfully",
    grade,
  });
});

const updateGrade = asyncHandler(async (req, res) => {
  const grade = await Grade.findById(req.params.id);

  if (!grade) {
    res.status(400);
    throw new Error("Grade not found");
  }

  const updatedGrade = await Grade.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({
    message: `Updated grade ${req.params.id}`,
    updatedGrade,
  });
});

const deleteGrade = asyncHandler(async (req, res) => {
  const grade = await Grade.findById(req.params.id);

  if (!grade) {
    res.status(400);
    throw new Error("Grade not found");
  }

  await grade.remove();

  res.status(200).json({
    message: `Removed grade ${req.params.id}`,
  });
});

module.exports = {
  getGrades,
  setGrade,
  updateGrade,
  deleteGrade,
};
