const quizData = [
    {
        question: 'What language defines HyperText Markup Language?',
        a: 'HTML',
        b: 'Java',
        c: 'Css',
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
        b: 'Background-color',
        c: 'justfy-content',
        d: 'margin',
        correct:'b',
    },
    {
        question: 'What tag in HTML creates a paragragh?',
        a: '<h2>',
        b: '<br>',
        c: '<p>',
        d: '<section>',
        correct: 'c',
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

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
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