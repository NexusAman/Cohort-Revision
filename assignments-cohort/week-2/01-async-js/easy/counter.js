let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(count);

    if (count >= 30) {
        clearInterval(intervalId);
    }
}, 1000);