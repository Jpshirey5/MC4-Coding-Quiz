const quizData = [
    {
        question: 'What language defines HyperText Markup Language?',
        1: 'HTML',
        2: 'Java',
        3: 'Css',
        4: 'Python',
        correct: '1',
    },
    {
        question: 'What do "Arrays" accomplish in JavaScript?',
        1: 'Store Data',
        2: 'Make a page look good',
        3: 'Change formatting',
        4: 'Stores multiple items in a list in a single variable',
        correct: '4',
    },
    {
        question: 'What is the function called when you want to change the color of your background in CSS?',
        1: 'text-align',
        2: 'Background-color',
        3: 'justfy-content',
        4: 'margin',
        correct:'2',
    },
    {
        question: 'What tag in HTML creates a paragragh?',
        1: '<h2>',
        2: '<br>',
        3: '<p>',
        4: '<section>',
        correct: '3',
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let finalScore = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innertext = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    }) 
    return answer 
}

submitBtn.addEventListener('click',() => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
             score++
        }

        currentQuiz++
        
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You got ${score}/${quizData.length} questions correct</h2>
        
            <button onclick="location.reload()">Reload</button>
            `
        }
    }

})