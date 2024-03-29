const resultTitle = document.getElementById('resultTitle');
const repeatButton = document.getElementById('repeatButton');
const resultElement = document.getElementById('result');
const userAnswers = JSON.parse(sessionStorage.getItem('USER_ANSWERS'));

resultTitle.textContent = function() {
  switch (sessionStorage.getItem('EVAL_TYPE')) {
    case 'razonamiento_logico':
      return '¡Felicitaciones! Has completado tu prueba de: Razonamiento lógico';
    case 'razonamiento_numerico':
      return '¡Felicitaciones! Has completado tu prueba de: Razonamiento numérico';
    case 'razonamiento_verbal':
      return '¡Felicitaciones! Has completado tu prueba de: Razonamiento verbal';
    case 'atencion_concentracion':
      return '¡Felicitaciones! Has completado tu prueba de: Atención y Concentración';
  }
}();

repeatButton.href = function() {
  switch (sessionStorage.getItem('EVAL_TYPE')) {
    case 'razonamiento_logico':
      return '../html/razonamiento_logico.html';
    case 'razonamiento_numerico':
      return '../html/razonamiento_numerico.html';
    case 'razonamiento_verbal':
      return '../html/razonamiento_verbal.html';
    case 'atencion_concentracion':
      return '../html/atencion_concentracion.html';
  }
}();

// funcion anonima para calcular el porcentaje de aciertos del usuario
resultElement.textContent = function () {
  let correctAnswersNum = 0;
  let result = 0;
  if (userAnswers.length > 0) {
    for (let answer of userAnswers) {
      if (answer) {
        if (answer.correctAnswer == answer.userAnswer) {
          correctAnswersNum++;
        } 
      }
    }
    result = Math.round((correctAnswersNum / userAnswers.length * 100) * 10) / 10;
  }
  return `${result}%`;
}();