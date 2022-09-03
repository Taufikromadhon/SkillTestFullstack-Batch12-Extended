function automaticallyAdded(userInput, outputFibonacci) {
  const addedValue = outputFibonacci - userInput;
  const addedValueOutput = document.getElementById('added-value');
  addedValueOutput.innerHTML = addedValue;
  console.log('Added Value = ' + addedValue);
}

function nearestFibonacci(num) {
  if (num == 0) {
    return;
  }
  let first = 0;
  let second = 1;
  let third = first + second;

  while (third <= num) {
    first = second;
    second = third;
    third = first + second;
  }
  const fiboSum =
    Math.abs(third - num) >= Math.abs(second - num) ? second : third;

  let fibonacciOutput = document.getElementById('output-nearest-fibonacci');
  fibonacciOutput.innerHTML = fiboSum;
  console.log('Fibonacci Terdekat = ' + fiboSum);
  return automaticallyAdded(num, fiboSum);
}



function submitNearestFibonacci(event) {
  event.preventDefault();
  const inputByUser1 = event.target['first-fibo'].value;
  const inputByUser2 = event.target['second-fibo'].value;
  const inputByUser3 = event.target['third-fibo'].value;

  let fiboNum = [];
  fiboNum[0] = inputByUser1;
  fiboNum[1] = inputByUser2;
  fiboNum[2] = inputByUser3;

  let N = parseInt(fiboNum[0]) + parseInt(fiboNum[1]) + parseInt(fiboNum[2]);
  console.log('Hasil Penjumlahan = ' + N);
  return nearestFibonacci(N);
}
