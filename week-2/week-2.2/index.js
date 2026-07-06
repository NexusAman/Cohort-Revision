import express from "express";
const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Body parsed successfully!")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
