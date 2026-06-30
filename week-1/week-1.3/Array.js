// push() add element to the last
function pushExample(arr, element) {
  console.log("Original Array:", arr);
  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop() remove element from the last
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() remove element from the front
function shiftExample(arr) {
  console.log("Original Array:", arr);
  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift() add element to the front
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);
  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat() merge two arrays
function concatExample(arr1, arr2) {
  console.log("Original Array:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// another way to do merge
function mergeArr(arr1, arr2) {
  console.log("Original Array:", arr1, arr2);
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  console.log("After merge", arr1);
}
mergeArr([7, 8], [9, 10]);

// forEach() take a callback and perform action on array elements
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach((item, index) => {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

//
