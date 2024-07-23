// Quiz data
const quizData = [
    {
        question: "1.Which language is used for web apps?",
        options: ["PHP", "Python", "JavaScript", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "2.What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "3.What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
        correct: "Hypertext Markup Language"
    },
    {
        question: "4.What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
        correct: "<script src='xxx.js'>"
    },
    {
        question: "5.How do you write 'Hello World' in an alert box?",
        options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        correct: "alert('Hello World');"
    },
    {
        question: "6.Which built-in method returns the length of the string?",
        options: ["length()", "size()", "index()", "None of the above"],
        correct: "length()"
    },
    {
        question: "7.Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "styles"],
        correct: "style"
    },
    {
        question: "8.Which is not a JavaScript data type?",
        options: ["Undefined", "Number", "Boolean", "Float"],
        correct: "Float"
    },
    {
        question: "9.Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
        correct: "Netscape"
    },
    {
        question: "10.Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correct: "//"
    }
];



const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0; 


function loadQuiz() {
    deselectAnswers(); 
    
    const currentQuizData = quizData[currentQuiz]; 
    

    questionEl.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.options[0];
    b_text.textContent = currentQuizData.options[1];
    c_text.textContent = currentQuizData.options[2];
    d_text.textContent = currentQuizData.options[3];
}


function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}


function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.nextElementSibling.textContent;
        }
    });
    return answer;
}


submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected(); 
    
    if (selectedAnswer) {
        const currentQuizData = quizData[currentQuiz]; 
        
        
        if (selectedAnswer === currentQuizData.correct) {
            score++; 
        }
        
        currentQuiz++; 
        
    
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } 
        else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


loadQuiz();