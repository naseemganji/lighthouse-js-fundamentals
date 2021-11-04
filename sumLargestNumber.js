let sumLargestNumbers = function (data) {
  let largeNum1 = 0;
  let largeNum2 = 0;

  // find the first large number
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largeNum1) {
      largeNum1 = data[i];
    }
  }


  for (let j = 0; j < data.length; j++) {   // find the second large number
    if (data[j] !== largeNum1 && data[j] > largeNum2) {
      largeNum2 = data[j];

    }
  } return largeNum1 + largeNum2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));