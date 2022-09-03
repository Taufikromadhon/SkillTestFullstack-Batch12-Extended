function firstSecondThird(inputByUser1, inputByUser2, inputByUser3) {
  let biggestPossibleNumber = document.getElementById('output-biggest-number');
  biggestPossibleNumber.innerHTML = inputByUser1;
  biggestPossibleNumber.innerHTML += inputByUser2;
  biggestPossibleNumber.innerHTML += inputByUser3;
}
function firstThirdSecond(inputByUser1, inputByUser2, inputByUser3) {
  let biggestPossibleNumber = document.getElementById('output-biggest-number');
  biggestPossibleNumber.innerHTML = inputByUser1;
  biggestPossibleNumber.innerHTML += inputByUser3;
  biggestPossibleNumber.innerHTML += inputByUser2;
}
function secondFirstThird(inputByUser1, inputByUser2, inputByUser3) {
  let biggestPossibleNumber = document.getElementById('output-biggest-number');
  biggestPossibleNumber.innerHTML = inputByUser2;
  biggestPossibleNumber.innerHTML += inputByUser1;
  biggestPossibleNumber.innerHTML += inputByUser3;
}
function secondThirdFirst(inputByUser1, inputByUser2, inputByUser3) {
  let biggestPossibleNumber = document.getElementById('output-biggest-number');
  biggestPossibleNumber.innerHTML = inputByUser2;
  biggestPossibleNumber.innerHTML += inputByUser3;
  biggestPossibleNumber.innerHTML += inputByUser1;
}
function thirdFirstSecond(inputByUser1, inputByUser2, inputByUser3) {
  let biggestPossibleNumber = document.getElementById('output-biggest-number');
  biggestPossibleNumber.innerHTML = inputByUser3;
  biggestPossibleNumber.innerHTML += inputByUser1;
  biggestPossibleNumber.innerHTML += inputByUser2;
}
function thirdSecondFirst(inputByUser1, inputByUser2, inputByUser3) {
  let biggestPossibleNumber = document.getElementById('output-biggest-number');
  biggestPossibleNumber.innerHTML = inputByUser3;
  biggestPossibleNumber.innerHTML += inputByUser2;
  biggestPossibleNumber.innerHTML += inputByUser1;
}
function nullOutput() {
  let biggestPossibleNumber = document.getElementById('output-biggest-number');
  biggestPossibleNumber.innerHTML = 'null';
}

function rearangeNumber(inputByUser1, inputByUser2, inputByUser3) {
  if (inputByUser1 > inputByUser2 && inputByUser1 > inputByUser3) {
    if (inputByUser2 > inputByUser3) {
      return firstSecondThird(inputByUser1, inputByUser2, inputByUser3);
    }
    return firstThirdSecond(inputByUser1, inputByUser2, inputByUser3);
  }
  if (inputByUser2 > inputByUser1 && inputByUser2 > inputByUser3) {
    if (inputByUser1 > inputByUser3) {
      return secondFirstThird(inputByUser1, inputByUser2, inputByUser3);
    }
    return secondThirdFirst(inputByUser1, inputByUser2, inputByUser3);
  }
  if (inputByUser3 > inputByUser1 && inputByUser3 > inputByUser2) {
    if (inputByUser1 > inputByUser2) {
      return thirdFirstSecond(inputByUser1, inputByUser2, inputByUser3);
    }
    return thirdSecondFirst(inputByUser1, inputByUser2, inputByUser3);
  }
  return nullOutput();
}

function biggestPossibleNumber(event) {
  event.preventDefault();
  const inputByUser = event.target['numbers'].value;
  let splittedText = inputByUser.split('');

  const inputByUser1 = splittedText[0];
  const inputByUser2 = splittedText[1];
  const inputByUser3 = splittedText[2];
  const inputByUser4 = splittedText[3];

  parseInt(inputByUser1, inputByUser2, inputByUser3);

  if (
    inputByUser == 0 ||
    inputByUser1 < 0 ||
    inputByUser2 < 0 ||
    inputByUser3 < 0 ||
    inputByUser1 == undefined ||
    inputByUser2 == undefined ||
    inputByUser3 == undefined ||
    inputByUser4 != undefined
  ) {
    return nullOutput();
  }

  return rearangeNumber(inputByUser1, inputByUser2, inputByUser3);
}
