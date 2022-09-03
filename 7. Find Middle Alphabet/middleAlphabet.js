function outputToUser(alphabetOfNum) {
  const outputText = document.getElementById('output-middle-alphabet');
  outputText.innerHTML += alphabetOfNum;
}
function refreshOutput(){
  const outputText = document.getElementById('output-middle-alphabet');
  outputText.innerHTML = '';
}
function urutanTengahGanda(numSelisih, numOfAlphabet1) {
  const angkaTengah = numSelisih / 2;
  const pembulatanAtas = angkaTengah + 0.5;
  const pembulatanBawah = angkaTengah - 0.5;
  const urutanTengah1 = numOfAlphabet1 + pembulatanBawah;
  const urutanTengah2 = numOfAlphabet1 + pembulatanAtas;

  let outputAlfabet1 = numToAlfabet(urutanTengah1);
  let outputAlfabet2 = numToAlfabet(urutanTengah2);

}
function urutanTengahTunggal(numSelisih, numOfAlphabet1) {
  const angkaTengah = numSelisih / 2;
  console.log('=====');
  console.log(`Angka Tengah = ${angkaTengah}`);
  console.log('=====');
  const urutanTengah = numOfAlphabet1 + angkaTengah;
  console.log('=====');
  console.log(`Urutan Tengah = ${urutanTengah}`);
  console.log('=====');

  parseInt(urutanTengah);

  numToAlfabet(urutanTengah);
}

function selisihUrutan(numOfAlphabet1, numOfAlphabet2) {
  parseInt(numOfAlphabet1, numOfAlphabet2);
  const numSelisih = numOfAlphabet2 - numOfAlphabet1;
  console.log('=====');
  console.log(`Nomer alphabet 1 = ${numOfAlphabet1}`);
  console.log(`Nomer alphabet 2 = ${numOfAlphabet2}`);
  console.log(`Selisih dari nomer = ${numSelisih}`);
  console.log('=====');
  if (numSelisih % 2 == 0) {
    urutanTengahTunggal(numSelisih, numOfAlphabet1);
  } else {
    urutanTengahGanda(numSelisih, numOfAlphabet1);
  }
}
function alphabetToNumbers(alphabet) {
  if (alphabet == 'a' || alphabet == 'A') {
    const numOfAlphabet = 1;
    return numOfAlphabet;
  } else if (alphabet == 'b' || alphabet == 'B') {
    const numOfAlphabet = 2;
    return numOfAlphabet;
  } else if (alphabet == 'c' || alphabet == 'C') {
    const numOfAlphabet = 3;
    return numOfAlphabet;
  } else if (alphabet == 'd' || alphabet == 'D') {
    const numOfAlphabet = 4;
    return numOfAlphabet;
  } else if (alphabet == 'e' || alphabet == 'E') {
    const numOfAlphabet = 5;
    return numOfAlphabet;
  } else if (alphabet == 'f' || alphabet == 'F') {
    const numOfAlphabet = 6;
    return numOfAlphabet;
  } else if (alphabet == 'g' || alphabet == 'G') {
    const numOfAlphabet = 7;
    return numOfAlphabet;
  } else if (alphabet == 'h' || alphabet == 'H') {
    const numOfAlphabet = 8;
    return numOfAlphabet;
  } else if (alphabet == 'i' || alphabet == 'I') {
    const numOfAlphabet = 9;
    return numOfAlphabet;
  } else if (alphabet == 'j' || alphabet == 'J') {
    const numOfAlphabet = 10;
    return numOfAlphabet;
  } else if (alphabet == 'k' || alphabet == 'K') {
    const numOfAlphabet = 11;
    return numOfAlphabet;
  } else if (alphabet == 'l' || alphabet == 'L') {
    const numOfAlphabet = 12;
    return numOfAlphabet;
  } else if (alphabet == 'm' || alphabet == 'M') {
    const numOfAlphabet = 13;
    return numOfAlphabet;
  } else if (alphabet == 'n' || alphabet == 'N') {
    const numOfAlphabet = 14;
    return numOfAlphabet;
  } else if (alphabet == 'o' || alphabet == 'O') {
    const numOfAlphabet = 15;
    return numOfAlphabet;
  } else if (alphabet == 'p' || alphabet == 'P') {
    const numOfAlphabet = 16;
    return numOfAlphabet;
  } else if (alphabet == 'q' || alphabet == 'Q') {
    const numOfAlphabet = 17;
    return numOfAlphabet;
  } else if (alphabet == 'r' || alphabet == 'R') {
    const numOfAlphabet = 18;
    return numOfAlphabet;
  } else if (alphabet == 's' || alphabet == 'S') {
    const numOfAlphabet = 19;
    return numOfAlphabet;
  } else if (alphabet == 't' || alphabet == 'T') {
    const numOfAlphabet = 20;
    return numOfAlphabet;
  } else if (alphabet == 'u' || alphabet == 'U') {
    const numOfAlphabet = 21;
    return numOfAlphabet;
  } else if (alphabet == 'v' || alphabet == 'V') {
    const numOfAlphabet = 22;
    return numOfAlphabet;
  } else if (alphabet == 'w' || alphabet == 'W') {
    const numOfAlphabet = 23;
    return numOfAlphabet;
  } else if (alphabet == 'x' || alphabet == 'X') {
    const numOfAlphabet = 24;
    return numOfAlphabet;
  } else if (alphabet == 'y' || alphabet == 'Y') {
    const numOfAlphabet = 25;
    return numOfAlphabet;
  } else if (alphabet == 'z' || alphabet == 'Z') {
    const numOfAlphabet = 26;
    return numOfAlphabet;
  } else {
    const numOfAlphabet = undefined;
    return numOfAlphabet;
  }
}
function numToAlfabet(num) {
  parseInt(num);
  console.log(`====`);
  console.log(`Num numToAlphabet = ${num}`);
  console.log(`====`);
  if (num == 1) {
    const alphabetOfNum = 'A';
    outputToUser(alphabetOfNum);
  } else if (num == 2) {
    let alphabetOfNum = 'B';
    outputToUser(alphabetOfNum);
  } else if (num == 3) {
    const alphabetOfNum = 'C';
    outputToUser(alphabetOfNum);
  } else if (num == 4) {
    const alphabetOfNum = 'D';
    outputToUser(alphabetOfNum);
  } else if (num == 5) {
    const alphabetOfNum = 'E';
    outputToUser(alphabetOfNum);
  } else if (num == 6) {
    const alphabetOfNum = 'F';
    outputToUser(alphabetOfNum);
  } else if (num == 7) {
    const alphabetOfNum = 'G';
    outputToUser(alphabetOfNum);
  } else if (num == 8) {
    const alphabetOfNum = 'H';
    outputToUser(alphabetOfNum);
  } else if (num == 9) {
    const alphabetOfNum = 'I';
    outputToUser(alphabetOfNum);
  } else if (num == 10) {
    const alphabetOfNum = 'J';
    outputToUser(alphabetOfNum);
  } else if (num == 11) {
    const alphabetOfNum = 'K';
    outputToUser(alphabetOfNum);
  } else if (num == 12) {
    const alphabetOfNum = 'L';
    outputToUser(alphabetOfNum);
  } else if (num == 13) {
    const alphabetOfNum = 'M';
    outputToUser(alphabetOfNum);
  } else if (num == 14) {
    const alphabetOfNum = 'N';
    outputToUser(alphabetOfNum);
  } else if (num == 15) {
    const alphabetOfNum = 'O';
    outputToUser(alphabetOfNum);
  } else if (num == 16) {
    const alphabetOfNum = 'P';
    outputToUser(alphabetOfNum);
  } else if (num == 17) {
    const alphabetOfNum = 'Q';
    outputToUser(alphabetOfNum);
  } else if (num == 18) {
    const alphabetOfNum = 'R';
    outputToUser(alphabetOfNum);
  } else if (num == 19) {
    const alphabetOfNum = 'S';
    outputToUser(alphabetOfNum);
  } else if (num == 20) {
    const alphabetOfNum = 'T';
    outputToUser(alphabetOfNum);
  } else if (num == 21) {
    const alphabetOfNum = 'U';
    outputToUser(alphabetOfNum);
  } else if (num == 22) {
    const alphabetOfNum = 'V';
    outputToUser(alphabetOfNum);
  } else if (num == 23) {
    const alphabetOfNum = 'W';
    outputToUser(alphabetOfNum);
  } else if (num == 24) {
    const alphabetOfNum = 'X';
    outputToUser(alphabetOfNum);
  } else if (num == 25) {
    const alphabetOfNum = 'Y';
    outputToUser(alphabetOfNum);
  } else if (num == 26) {
    const alphabetOfNum = 'Z';
    outputToUser(alphabetOfNum);
  } else {
    const alphabetOfNum = undefined;
    outputToUser(alphabetOfNum);
  }
}

function submitMiddleAlphabet(event) {
  event.preventDefault();
  const inputByUser1 = event.target['first-alphabet'].value;
  const inputByUser2 = event.target['second-alphabet'].value;

  const numOfAlphabet1 = alphabetToNumbers(inputByUser1);
  const numOfAlphabet2 = alphabetToNumbers(inputByUser2);

  refreshOutput();

  selisihUrutan(numOfAlphabet1, numOfAlphabet2);
}
