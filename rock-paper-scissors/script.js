let userScore = 0;
let compScore = 0;

const user_score = document.querySelector('#user-score');
const comp_score = document.querySelector('#comp-score');

const msg = document.querySelector('#msg');
const choices = document.querySelectorAll('.choice');

function genCompChoice() {
     const options = ['rock', 'paper', 'scissors'];
     const randInd = Math.floor(Math.random() * 3);

     return options[randInd];
}

function drawGame() {
    msg.innerText = 'The game is draw. Plz try again...';
    msg.style.backgroundColor = '#081b31';
}

function isWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++ ;
        user_score.innerText = userScore;
        msg.style.backgroundColor = 'green';
        msg.innerText = `You won!. ${userChoice} beats ${compChoice}.`;
    } else {
        compScore++ ;
        comp_score.innerText = compScore;
        msg.style.backgroundColor = 'red';
        msg.innerText = `You lost!. ${compChoice} beats ${userChoice}.`;
    }

}

function playGame(userChoice) {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame()
    } 
    else {
        let userWin = true
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;

        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;

        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        
        isWinner(userWin, userChoice, compChoice)

    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        // console.log(userChoice);
        
        playGame(userChoice);

    });



});




