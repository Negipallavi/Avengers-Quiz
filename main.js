window.onload = function()
{
  document.querySelector('.svg-frame').style.display = 'none';
}

let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const quizForm = document.getElementById('quizForm');
const mainContainer = document.querySelector('main');

// Store answers and result in sessionStorage
function storeAnswersAndResult() {
  let answers = {};
  const answersArray = document.querySelectorAll('input[type=radio]:checked');

  answersArray.forEach(answer => {
    let questionName = answer.name;
    let answerValue = answer.value;
    answers[questionName] = answerValue;
  });

  sessionStorage.setItem('answers', JSON.stringify(answers)); // Store answers as JSON string
}

function showQuestion(index) {
  questions.forEach((q, i) => {
    q.classList.toggle('active', i === index);
  });

  prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
  nextBtn.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
  submitBtn.style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

document.getElementById('quizForm').onsubmit = function (event) {
  event.preventDefault(); // Prevent form from reloading

  let counts = {};
  const answers = document.querySelectorAll('input[type=radio]:checked');

  answers.forEach(answer => {
      let value = answer.value.trim();
      counts[value] = (counts[value] || 0) + 1;
  });

  let mostChosenValue = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, "1");

  let avengerNames = {
      "1": "Hawkeye",
      "2": "Captain America",
      "3": "Thor",
      "4": "Iron Man"
  };

  let resultAvenger = avengerNames[mostChosenValue] || "Unknown Avenger";

  // Store only the result name in sessionStorage
  sessionStorage.setItem('result', resultAvenger);

  quizForm.style.display = 'none';
  // Redirect to result page
  window.location.href = 'result/index.html';
};

showQuestion(0);