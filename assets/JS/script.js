// Front Start Page
const frontPage = document.getElementById('front-page');
const quiz = document.getElementById('quiz');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
  frontPage.style.display = 'none';
  quiz.style.display = 'block';
  loadQuiz();
});

//Questions for the Quiz
const quizData = [
    {
        question: 'What language defines HyperText Markup Language?',
        a: 'HTML',
        b: 'Java',
        c: 'CSS',
        d: 'Python',
        correct: 'a',
    },
    {
        question: 'What do "Arrays" accomplish in JavaScript?',
        a: 'Store Data',
        b: 'Make a page look good',
        c: 'Change formatting',
        d: 'Stores multiple items in a list in a single variable',
        correct: 'd',
    },
    {
        question: 'What is the function called when you want to change the color of your background in CSS?',
        a: 'text-align',
        b: 'background-color',
        c: 'justify-content',
        d: 'margin',
        correct: 'b',
    },
    {
        question: 'What tag in HTML creates a paragraph?',
        a: '<h2>',
        b: '<br>',
        c: '<p>',
        d: '<section>',
        correct: 'c',
    },
];

//Constances to get information from HTML file
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

//Quiz functionality
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    //Receiving Questions from Quiz Data
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You got ${score}/${quizData.length} questions correct</h2>
          <p>Enter your name: <input type="text" id="username"></p>
          <button id="save">Save</button>
          <button onclick="location.reload()">Reload</button>
        `;
        const saveBtn = document.getElementById('save');
        const username = document.getElementById('username');
        saveBtn.addEventListener('click', () => {
          localStorage.setItem('username', username.value);
          localStorage.setItem('score', score);
          alert('Score saved!');
        });
      }
    }
  });
  
