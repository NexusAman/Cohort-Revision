import express from "express";

const app = express();

// middleware
app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`You have ${kidneysLength} kidneys!`)
})

//global catches
app.use((err, req, res, next) => {
    res.status(500).send("Sorry something is up with our server!")
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})