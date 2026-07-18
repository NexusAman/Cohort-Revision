import express from "express";
const { z } = require("zod");

const app = express();

app.use(express.json());

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(18),
});

app.post("/signup", (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid Input",
    });
  }

  res.send("User Registered");
});

app.listen(3000);
