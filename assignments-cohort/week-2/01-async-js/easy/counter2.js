let count = 0;

function counter() {
  if (count == 10) return;
  setTimeout(() => {
    count += 1;
    console.log(count);
    counter();
  }, 1000);
}

counter();
