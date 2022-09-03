function submitAlternateCase(event) {
  showSample();
  sampleWords();
  event.preventDefault();
  let inputByUser = event.target['your-words'].value;
  alternateCase(inputByUser);
}

function showSample() {
  const divSample = document.getElementById('sample');
  divSample.style.display = 'block';
}

function sampleWords() {
  const inputText1 = document.getElementById('sample-input-1').textContent;
  const inputText2 = document.getElementById('sample-input-2').textContent;
  const inputText3 = document.getElementById('sample-input-3').textContent;

  alternateCase(inputText1);
  alternateCase(inputText2);
  alternateCase(inputText3);
  console.log(inputText1);
  console.log(inputText2);
  console.log(inputText3);
}

function alternateCase(words) {
  let newWords = '';
  for (let hurufKe = 0; hurufKe < words.length; hurufKe++) {
    if (words[hurufKe] === words[hurufKe].toLowerCase()) {
      newWords += words[hurufKe].toUpperCase();
    } else {
      newWords += words[hurufKe].toLowerCase();
    }
  }
  outputToUser(newWords);
}

function outputToUser(outputWords) {
  if (outputWords === 'ABC') {
    const outputText = document.getElementById('sample-output-1');
    outputText.innerHTML = outputWords;
  } else if (outputWords === 'abc') {
    const outputText = document.getElementById('sample-output-2');
    outputText.innerHTML = outputWords;
  } else if (outputWords === 'hELLO wORLD') {
    const outputText = document.getElementById('sample-output-3');
    outputText.innerHTML = outputWords;
  } else {
    const outputText = document.getElementById('output-alternate-case');
    outputText.innerHTML = outputWords;
  }
}
