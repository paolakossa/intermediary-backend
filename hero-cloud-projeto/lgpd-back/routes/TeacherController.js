import express from "express";

let router = express.Router();

import teacherService from "../services/TeacherService.js";

router.post("/addTeacher", async (req, res) => {
  const teacherModel = {
    name: req.body.name,
  };
  const teacher = await teacherService.saveTeacher(teacherModel);
  return res.status(201).json({
    message: "Teacher created successfully",
    teacher: teacher,
  });
});

router.get("/getAllTeachers", async (req, res) => {
  const allTeachers = await teacherService.getAllTeachers();
  return res.status(200).json({
    message: "Teachers retrieved successfully",
    teachers: allTeachers,
  });
});

router.get("/teacher/:id", async (req, res) => {
  const id = req.params.id;
  const teacher = await teacherService.getTeacherById(id);
  if (!teacher) {
    return res.status(404).json({
      message: "Teacher not found",
    });
  }
  return res.status(200).json({
    message: "Teacher retrieved successfully",
    teacher: teacher,
  });
});

router.delete("/deleteTeacher/:id", async (req, res) => {
  const id = req.params.id;
  const deletedTeacher = await teacherService.deleteTeacherById(id);
  if (!deletedTeacher) {
    return res.status(404).json({
      message: "Teacher not found",
    });
  }
  return res.status(200).json({
    message: "Teacher deleted successfully ",
    teacher: deletedTeacher,
  });
});

router.put("/updateTeacher/:id", async (req, res) => {
  const id = req.params.id;
  const teacherModel = {
    name: req.body.name,
  };
  const updatedTeacher = await teacherService.updateTeacherById(
    id,
    teacherModel
  );
  if (!updatedTeacher) {
    return res.status(404).json({
      message: "Teacher not found or no changes made",
    });
  }
  return res.status(200).json({
    message: "Teacher updated successfully",
    teacher: updatedTeacher,
  });
});

export default router;
