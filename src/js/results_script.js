const resultTitle = document.getElementById('resultTitle');
const resultElement = document.getElementById('result');
const userAnswers = JSON.parse(sessionStorage.getItem('USER_ANSWERS'));

resultTitle.textContent = function() {
  switch (sessionStorage.getItem('EVAL_TYPE')) {
    case 'razonamiento_logico':
      return 'Razonamiento lógico';
    case 'razonamiento_numerico':
      return 'Razonamiento numerico';
    case 'razonamiento_verbal':
      return 'Razonamiento verbal';
  }
}();

resultElement.textContent = function () {
    correctAnswersNum = 0;
    for (let answer of userAnswers) {
        if (answer.correctAnswer == answer.userAnswer) {
            correctAnswersNum++;
        }
    }
    return `${correctAnswersNum/userAnswers.length * 100}%`;
}();