const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;

    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      return res.status(409).send("Admin already exists");
    }

    await Admin.create({
      username: username,
      password: password,
    });

    return res.status(201).send("Admin created successfully!");
  } catch (err) {
    return res.status(500).send("Failed to create admin");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, imageLink, price } = req.body;

    const existingCourse = await Course.findOne({
      title,
    });

    if (existingCourse) {
      return res.status(409).send("Course already exists");
    }

    const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price,
    });

    return res
      .status(201)
      .json({ msg: "Course created successfully!", courseId: newCourse._id });
  } catch (err) {
    return res.status(500).send("Failed to create course");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    return res.status(200).json({
      courses: courses,
    });
  } catch (err) {
    return res.status(500).send("Failed to fetch courses!");
  }
});

module.exports = router;
