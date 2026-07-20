const express = require("express");

const app = express();

app.use(express.json());

function isOldEnough(req, res, next) {
  const age = req.query.age;

  if (age >= 14) {
    return next();
  }

  next(new Error("Sorry you are not of age yet!"));
}

app.use(isOldEnough);

app.get("/ride1", (req, res) => {
  res.status(200).send("You have successfully riden the ride 1");
});

app.get("/ride2", (req, res) => {
  res.status(200).send("You have successfully riden the ride 2");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000);
