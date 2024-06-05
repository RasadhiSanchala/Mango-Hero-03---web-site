    const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function updateScoreElements() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

updateScoreElements();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose!';
        } else if (computerMove === 'Paper') {
            result = 'You win!';
        } else if (computerMove === 'Scissors') {
            result = 'Tie!';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win!';
        } else if (computerMove === 'Paper') {
            result = 'Tie!';
        } else if (computerMove === 'Scissors') {
            result = 'You lose!';
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie!';
        } else if (computerMove === 'Paper') {
            result = 'You lose!';
        } else if (computerMove === 'Scissors') {
            result = 'You win!';
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose!') {
        score.losses += 1;
    } else if (result === 'Tie!') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElements();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `
        You
        <img src="images/${playerMove.toLowerCase()}-emoji.png" class="move-icon" alt="${playerMove}">
        <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-icon" alt="${computerMove}">
        Computer
    `;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElements();
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}
