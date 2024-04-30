const nextBtn = document.querySelector('.next-btn');
const question = document.querySelector('.question');
const answerBtns = document.querySelector('.answer-btns');

const questions = [
    {
        question: 'What is the capital of Australia?',
        answers: [{ text: 'Sydney', correct: false }, { text: 'Melbourne', correct: false }, { text: 'Canberra', correct: true }, { text: 'Perth', correct: false }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [{ text: 'Vincent van Gogh', correct: false }, { text: 'Pablo Picasso', correct: false }, { text: 'Leonardo da Vinci', correct: true }, { text: 'Michelangelo', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean in the world?',
        answers: [{ text: 'Atlantic Ocean', correct: false }, { text: 'Indian Ocean', correct: false }, { text: 'Arctic Ocean', correct: false }, { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        answers: [{ text: 'Venus', correct: false }, { text: 'Mars', correct: true }, { text: 'Jupiter', correct: false }, { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: [{ text: 'William Shakespeare', correct: true }, { text: 'George Orwell', correct: false }, { text: 'Charles Dickens', correct: false }, { text: 'Greene', correct: false }
        ]
    },
];

let currQuestionIndexNo = 0;
let score = 0;

function startQuiz() {
    currQuestionIndexNo = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    startQuestions();
};
function reSetState() {
    nextBtn.style.display = 'none';
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
};
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score ++;
    }else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerBtns.children).forEach(button=> {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';

}

function showScore() {
    reSetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = 'Play Again!';
    nextBtn.style.display = 'block';
}
function handleNextButton() {
    currQuestionIndexNo++;
    if (currQuestionIndexNo < questions.length) {
        startQuestions();
    }else {
        showScore();
    }
}
nextBtn.addEventListener('click', ()=> {
    if(currQuestionIndexNo < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
})
function startQuestions() {
    reSetState();
    let currQuestion = questions[currQuestionIndexNo];
    let currQuestionNo = currQuestionIndexNo + 1;
    question.innerHTML = currQuestionNo + '. ' + currQuestion.question;

    currQuestion.answers.forEach((answer)=> {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtns.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    })

}
startQuiz();
