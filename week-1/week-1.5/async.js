function amanAsyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hi there!");
    }, 2000);
  });
}

async function main() {
  const value = await amanAsyncFunction();
  console.log(value);
  console.log("Execution successful!");
}

main();
