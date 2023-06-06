// obtenemos las referencias a elementos HTML
const evaluationTitle = document.getElementById('evaluationTitle');
const timer = document.getElementById('timer');
const nextButton = document.getElementById('nextButton');
const questionElement = document.getElementById('question');
const questionNumber = document.getElementById('questionNumber');
const radioInputs = document.querySelectorAll('input[type="radio"]');

// inicializamos variables
let totalTime = 600; // tiempo total en segundos
let currentTime = totalTime;
let currentQuestionIndex = 0;
let questions = [];
let userAnswers = [];

// funcion para mostrar la siguiente pregunta
function showNextQuestion() {
  if (currentQuestionIndex + 1 == questions.length) { nextButton.textContent = 'Finalizar'; }
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;
  questionNumber.textContent = `${currentQuestionIndex + 1}/${questions.length} preguntas`;
  for (let i = 0; i < radioInputs.length; i++) {
    let input = radioInputs[i];
    let label = document.querySelector(`label[for="${input.id}"]`);
    switch (i) {
      case 0:
        input.value = currentQuestion.answer1;
        label.textContent = currentQuestion.answer1;
        break;
      case 1:
        input.value = currentQuestion.answer2;
        label.textContent = currentQuestion.answer2;
        break;
      case 2:
        input.value = currentQuestion.answer3;
        label.textContent = currentQuestion.answer3;
        break;
      case 3:
        input.value = currentQuestion.answer4;
        label.textContent = currentQuestion.answer4;
        break;
    }
  }
  currentQuestionIndex++;
}

// funcion para dar formato de M:S
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// para numeros menores a 10 añadimos ceros a la izquierda
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

function startTimer() {
  const timerInterval = setInterval(() => {
    currentTime--;
    // actualizamos el html con el tiempo actual
    timer.textContent = `Quedan ${formatTime(currentTime)} minutos`;
    // verificamos si el tiempo ha llegado a cero
    if (currentTime <= 0) {
      clearInterval(timerInterval);
      finishEvaluation();
    }
  }, 1000); // Actualizamos cada segundo 
}

function finishEvaluation() {
  window.location.replace('../html/results.html');
  sessionStorage.setItem('USER_ANSWERS', JSON.stringify(userAnswers));
}

evaluationTitle.textContent = function() {
  switch (sessionStorage.getItem('EVAL_TYPE')) {
    case 'razonamiento_logico':
      return 'Prueba de razonamiento lógico';
    case 'razonamiento_numerico':
      return 'Prueba de razonamiento numerico';
    case 'razonamiento_verbal':
      return 'Prueba de razonamiento verbal';
    case 'atencion_concentracion':
      return 'Prueba de atención y concentración';
  }
}();

nextButton.addEventListener('click', () => {
  // si no hemos acabado las preguntas, mostramos la siguiente
  // ademas guardamos en un array la respuesta del usuario
  if (currentQuestionIndex != questions.length) {
    document.getElementsByName('answers').forEach(function (element) {
      if (element.checked) {
        let currentQuestion = questions[currentQuestionIndex-1];
        userAnswers.push(
          {
            question: currentQuestion.question,
            correctAnswer: currentQuestion.correct_answer,
            userAnswer: element.value
          });
        element.checked = false;
      }
    });
    showNextQuestion();
  } else {
    // si se han acabado las preguntas, el boton nos debe redirigir 
    // a la pagina de resultados
    finishEvaluation();
  }
});

// obtenemos las preguntas de la base de datos
fetch('../php/connect.php?'+ new URLSearchParams({
    EVAL_TYPE: sessionStorage.getItem('EVAL_TYPE')
  }))
  .then(response => response.json())
  .then(data => {
    questions = data;
    showNextQuestion();
    startTimer();
  })
.catch(error => console.error(error));
