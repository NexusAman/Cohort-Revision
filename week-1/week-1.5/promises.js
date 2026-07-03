function amanAsyncFunction() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("hi there");
    }, 2000);
  });
}
function onDone(data){
    console.log(data);
}
const value = amanAsyncFunction();
value.then(onDone);
