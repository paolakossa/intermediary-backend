import express from "express";

let router = express.Router();

import courseService from "../services/CourseService.js";

router.post("/addCourse", async (req, res) => {
  const courseModel = {
    name: req.body.name,
  };
  const course = await courseService.saveCourse(courseModel);
  return res.status(201).json({
    message: "Course created successfully",
    course: course,
  });
});

router.get("/getAllCourses", async (req, res) => {
  const allCourses = await courseService.getAllCourses();
  return res.status(200).json({
    message: "Courses retrieved successfully",
    courses: allCourses,
  });
});

router.get("/course/:id", async (req, res) => {
  const id = req.params.id;
  const course = await courseService.getCourseById(id);
  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }
  return res.status(200).json({
    message: "Course retrieved successfully",
    course: course,
  });
});

router.delete("/deleteCourse/:id", async (req, res) => {
  const id = req.params.id;
  const deletedCourse = await courseService.deleteCourseById(id);
  if (!deletedCourse) {
    return res.status(404).json({
      message: "Course not found",
    });
  }
  return res.status(200).json({
    message: "Course deleted successfully ",
    course: deletedCourse,
  });
});

router.put("/updateCourse/:id", async (req, res) => {
  const id = req.params.id;
  const courseModel = {
    name: req.body.name,
  };
  const updatedCourse = await courseService.updateCourseById(
    id,
    courseModel
  );
  if (!updatedCourse) {
    return res.status(404).json({
      message: "Course not found or no changes made",
    });
  }
  return res.status(200).json({
    message: "Course updated successfully",
    course: updatedCourse,
  });
});

export default router;
