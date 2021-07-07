let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById('userScore');
const compScoreSpan = document.getElementById('compScore');
const scoreBoardDiv = document.querySelector('.score-board');
const site = document.querySelector('.site');
const result = document.querySelector('.result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

function compChoice() {
    let choices = [
        'rock',
        'paper',
        'scissor'
    ]
    let randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}

const userSup = "user".fontsize(3).sub();
const compSup = "comp".fontsize(3).sub();

function win(user, comp) {
    userScore++;
    userScoreSpan.textContent = userScore;
    compScoreSpan.innerHTML = compScore;
    const userSup = "user".fontsize(3).sub()
    const compSup = "comp".fontsize(3).sub()
    rock.classList.add('win')
    result.innerHTML = `${user}${userSup} beats ${comp}${compSup}. You Win!!`
    document.getElementById(user).classList.add('win')
    setTimeout(() => {
        document.getElementById(user).classList.remove('win')
    }, 500);
}

function lose(user, comp) {
    compScore++;
    compScoreSpan.textContent = compScore;
    userScoreSpan.textContent = userScore;
    result.innerHTML = `${user}${userSup} losos to ${comp}${compSup}. You lose...`
    document.getElementById(user).classList.add('lose')
    setTimeout(() => {
        document.getElementById(user).classList.remove('lose')
    }, 500);
}

function draw(user, comp) {
    result.innerHTML = `${user}${userSup} equals ${comp}${compSup}. It's a draw!!`
    document.getElementById(user).classList.add('draw')
    setTimeout(() => {
        document.getElementById(user).classList.remove('draw')
    }, 500);
}

function game(userChoice) {
    const computerChoice = compChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win(userChoice, computerChoice)
            break;
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            lose(userChoice, computerChoice)
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            draw(userChoice, computerChoice)
            break;
    }
}

function main() {
    rock.addEventListener('click', () => {
        game('rock')
    })

    paper.addEventListener('click', () => {
        game('paper')
    })

    scissor.addEventListener('click', () => {
        game('scissor')
    })
}



main()