// HH:MM:SS
setInterval(() => {
  let currentDate = new Date();
  let hours = String(currentDate.getHours()).padStart(2, "0");
  let minutes = String(currentDate.getMinutes()).padStart(2, "0");
  let seconds = String(currentDate.getSeconds()).padStart(2, "0");

  console.log(`HH:MM:SS -> ${hours}:${minutes}:${seconds}`);
}, 1000);

// HH:MM::SS AM/PM
setInterval(() => {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = String(currentDate.getMinutes()).padStart(2, "0");
  let seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  hours = String(hours).padStart(2, "0");

  console.log(`HH:MM:SS AM/PM -> ${hours}:${minutes}:${seconds} ${period}`);
}, 1000);
