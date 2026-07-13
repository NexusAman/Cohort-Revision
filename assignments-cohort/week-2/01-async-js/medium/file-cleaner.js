import fs from "fs";
let fileData;
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  
  const cleanedData = data.replace(/\s+/g, " ").trim();

  fs.writeFile("data.txt", cleanedData, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File written successfully!");
  })
});