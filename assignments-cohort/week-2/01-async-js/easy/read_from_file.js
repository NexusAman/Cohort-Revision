import fs from "fs";

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

let sum = 0;
for (let i = 1; i < 100000; i++) {
  sum += i;
}

console.log(`Sum from ${1} to ${100000} is ${sum}`);
