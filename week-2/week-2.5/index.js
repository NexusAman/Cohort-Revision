import express from "express";

const app = express();

app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const name = users[0].name;
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    name,
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;

  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Kidney added successfully!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys.healthy == false) {
      users[0].kidneys.healthy = true;
    }
  }
  res.json({
    msg: "Kidneys are now healthy!",
  });
});

app.delete("/", (req, res) => {
  if (isThereIsAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.status(200).json({
      msg: "Deleted unhealthy kidneys successfully!",
    });
  }else{
    res.status(411).json({
        msg : "Your kidneys are already good!"
    })
  }
});

function isThereIsAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}
app.listen(3000);
