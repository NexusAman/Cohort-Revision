const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({
      username,
    });

    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    await User.create({
      username,
      password,
    });
    return res.status(201).send("User created successfully!");
  } catch (err) {
    return res.status(500).send("Failed to create user");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(404).send("Please signup first!");
    }

    if (existingUser.password !== password) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign(
      {
        username: existingUser.username,
      },
      process.env.JWT_SECRET,
    );

    return res.status(200).json({
      token,
    });
  } catch (err) {
    return res.status(500).send("Failed to login");
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    return res.status(200).json({
      courses: courses,
    });
  } catch (err) {
    return res.status(500).send("Failed to fetch courses!");
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const { courseId } = req.params;
    const username = req.user.username;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).send("Course not found");
    }

    await User.updateOne(
      { username },
      {
        $push: {
          purchasedCourses: courseId,
        },
      },
    );

    return res.status(200).send("Course purchased successfully!");
  } catch (err) {
    return res.status(500).send("Failed to purchase course");
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const username = req.user.username;

    const user = await User.findOne({ username });
    const purchasedCourses = user.purchasedCourses;

    const courses = await Course.find({
      _id: {
        $in: purchasedCourses,
      },
    });

    return res.status(200).json({
      courses: courses,
    });
  } catch (err) {
    return res.status(500).send("Falied to fetch courses");
  }
});

module.exports = router;
