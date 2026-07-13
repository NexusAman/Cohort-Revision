import fs from "fs";

fs.writeFile("data.txt", "Good Morning Dosto!", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File written successfully!");
});
