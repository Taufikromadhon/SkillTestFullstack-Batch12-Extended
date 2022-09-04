function submitMapArrayData(event) {
  const outputArray = document.getElementById('output-regenerated-array-data');
  outputArray.innerHTML = '';
  event.preventDefault();
  sampleArray();
  showSample();
  let inputByUser = event.target['array-data'].value;
  convertToArray(inputByUser);
}

function convertToArray(text) {
  let newArray = text.split(', ');
  console.log(newArray);
  regenerateArray(newArray);
}

function regenerateArray(arrayData) {
  let toRegenerate = arrayData;
  console.log(`To Regenerate ${toRegenerate}`)
  let n = arrayData.length;
  let sample1 = '12,20';
  let sample2 = '12,20';
  let sample3 = '3,27,4,2';
  let sample4 = '13,10,5,2,9';
  let sample5 = '16,17,4,3,5,2';
  if (toRegenerate == sample1) {
    const outputArray = document.getElementById('sample-output-1').textContent;
    if(outputArray == ''){
      productArraySample1(toRegenerate, n);
    } else if(outputArray != '' && toRegenerate == sample2){
      productArraySample2(toRegenerate, n);
    }
  } else if (toRegenerate == sample3) {
    productArraySample3(toRegenerate, n);
  } else if (toRegenerate == sample4) {
    productArraySample4(toRegenerate, n);
  } else if (toRegenerate == sample5) {
    productArraySample5(toRegenerate, n);
  } else {
    productArray(toRegenerate, n);
  }
}

/* Function to print product array
	for a given array arr[] of size n */
function productArray(arr, n) {
  // Base case
  if (n == 1) {
    outputArray(0);
    return;
  }

  // Initialize memory to all arrays
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;

  /* Left most element of left array
		is always 1 */
  left[0] = 1;

  /* Right most element of right
		array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  /* Construct the product array using
		left[] and right[] */
  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  /* print the constructed prod array */
  for (i = 0; i < n; i++) {
    outputArray(prod[i]);
  }

  return;
}

function productArraySample1(arr, n) {
  // Base case
  if (n == 1) {
    outputArraySample1(0);
    return;
  }

  // Initialize memory to all arrays
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;

  /* Left most element of left array
		is always 1 */
  left[0] = 1;

  /* Right most element of right
		array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  /* Construct the product array using
		left[] and right[] */
  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  /* print the constructed prod array */
  for (i = 0; i < n; i++) {
    outputArraySample1(prod[i]);
  }

  return;
}

function productArraySample2(arr, n) {
  // Base case
  if (n == 1) {
    outputArraySample2(0);
    return;
  }

  // Initialize memory to all arrays
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;

  /* Left most element of left array
		is always 1 */
  left[0] = 1;

  /* Right most element of right
		array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  /* Construct the product array using
		left[] and right[] */
  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  /* print the constructed prod array */
  for (i = 0; i < n; i++) {
    outputArraySample2(prod[i]);
  }

  return;
}

function productArraySample3(arr, n) {
  // Base case
  if (n == 1) {
    outputArraySample3(0);
    return;
  }

  // Initialize memory to all arrays
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;

  /* Left most element of left array
		is always 1 */
  left[0] = 1;

  /* Right most element of right
		array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  /* Construct the product array using
		left[] and right[] */
  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  /* print the constructed prod array */
  for (i = 0; i < n; i++) {
    outputArraySample3(prod[i]);
  }

  return;
}

function productArraySample4(arr, n) {
  // Base case
  if (n == 1) {
    outputArraySample4(0);
    return;
  }

  // Initialize memory to all arrays
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;

  /* Left most element of left array
		is always 1 */
  left[0] = 1;

  /* Right most element of right
		array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  /* Construct the product array using
		left[] and right[] */
  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  /* print the constructed prod array */
  for (i = 0; i < n; i++) {
    outputArraySample4(prod[i]);
  }

  return;
}

function productArraySample5(arr, n) {
  // Base case
  if (n == 1) {
    outputArraySample5(0);
    return;
  }

  // Initialize memory to all arrays
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;

  /* Left most element of left array
		is always 1 */
  left[0] = 1;

  /* Right most element of right
		array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  /* Construct the product array using
		left[] and right[] */
  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  /* print the constructed prod array */
  for (i = 0; i < n; i++) {
    outputArraySample5(prod[i]);
  }

  return;
}

function outputArray(regeneratedArrayData) {
  const outputArray = document.getElementById('output-regenerated-array-data');
  outputArray.innerHTML += regeneratedArrayData;
  outputArray.innerHTML += ' ';
}

function outputArraySample1(regeneratedArrayData) {
  const outputArray = document.getElementById('sample-output-1');
  outputArray.innerHTML += regeneratedArrayData;
  outputArray.innerHTML += ' ';
}
function outputArraySample2(regeneratedArrayData) {
  const outputArray = document.getElementById('sample-output-2');
  outputArray.innerHTML += regeneratedArrayData;
  outputArray.innerHTML += ' ';
}
function outputArraySample3(regeneratedArrayData) {
  const outputArray = document.getElementById('sample-output-3');
  outputArray.innerHTML += regeneratedArrayData;
  outputArray.innerHTML += ' ';
}
function outputArraySample4(regeneratedArrayData) {
  const outputArray = document.getElementById('sample-output-4');
  outputArray.innerHTML += regeneratedArrayData;
  outputArray.innerHTML += ' ';
}
function outputArraySample5(regeneratedArrayData) {
  const outputArray = document.getElementById('sample-output-5');
  outputArray.innerHTML += regeneratedArrayData;
  outputArray.innerHTML += ' ';
}

function sampleArray() {
  const inputText1 = document.getElementById('sample-input-1').textContent;
  const inputText2 = document.getElementById('sample-input-2').textContent;
  const inputText3 = document.getElementById('sample-input-3').textContent;
  const inputText4 = document.getElementById('sample-input-4').textContent;
  const inputText5 = document.getElementById('sample-input-5').textContent;

  convertToArray(inputText1);
  convertToArray(inputText2);
  convertToArray(inputText3);
  convertToArray(inputText4);
  convertToArray(inputText5);
}

function showSample() {
  const divSample = document.getElementById('sample');
  divSample.style.display = 'block';
}