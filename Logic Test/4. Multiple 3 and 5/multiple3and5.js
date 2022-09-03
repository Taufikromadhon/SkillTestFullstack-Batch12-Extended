function multiple3and5(num) {
  
  parseInt(num);
  let total = 0;
  parseInt(total);

  for (let angkaKe = 0; angkaKe < num; angkaKe++) {
    let angka = angkaKe;
    if (angkaKe % 3 == 0 && angkaKe > 0 || angkaKe % 5 == 0 && angkaKe > 0)  {
      total = parseInt(total) + parseInt(angka);
      console.log(`angka = ${angka}`);
      console.log(`total = ${total}`);
    }
  }
  outputToUser(total);
}

function outputToUser(finalNum) {
  let outputToUser = document.getElementById('output-multiple-3-and-5');
  outputToUser.innerHTML = finalNum;
}

function submitMultiple3and5(event) {
  event.preventDefault();
  const inputByUser = event.target['your-number'].value;

  console.log(inputByUser);
  multiple3and5(inputByUser);
}
