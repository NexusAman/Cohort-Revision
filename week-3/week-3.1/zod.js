import express from "express";
import zod from "zod";

const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);

  if (!response.success) {
    return res.status(411).send("Inputs are invalid");
  }

  res.send({
    response,
  });
});

app.listen(3000);
