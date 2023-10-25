const asyncHandler = require("express-async-handler");

const Teacher = require("../models/teacherModel");

const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find();

  res.status(200).json(teachers);
});

const setTeacher = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add content");
  }

  const teacher = await Teacher.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  res.status(200).json({
    message: "Created teacher succesfully",
    teacher,
  });
});

const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    res.status(400);
    throw new Error("Teacher not found");
  }

  const updatedTeacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({
    message: `Updated teacher ${req.params.id}`,
    updatedTeacher,
  });
});

const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    res.status(400);
    throw new Error("Teacher not found");
  }

  await teacher.remove();

  res.status(200).json({
    message: `Removed teacher ${req.params.id}`,
  });
});

module.exports = {
  getTeachers,
  setTeacher,
  updateTeacher,
  deleteTeacher,
};
