function computerPlay() {
	let computerNumericChoice = Math.floor(Math.random() * 3);
	switch(computerNumericChoice) {
    case 0:
      return ("rock")
      break;
    case 1:
      return ("paper");
      break;
    case 2:
      return ("scissors");
      break;
    default:
			return ("ERROR");
	}
}

function playRound(playerSelection, computerSelection) {
  playerSelection	= playerSelection.toLowerCase();
	choices.textContent = "You chose "+playerSelection+", computer chose "+computerSelection

	switch(playerSelection) {
    case "rock":
	    switch(computerSelection) {
				case "rock":
          return [0,0];
          break;
        case "paper":
          return [1,0];
          break;
        case "scissors":
          return [0,1];
          break;
        default:
	    		return ("ERROR");
          break;
			}
			break;
    case "paper":
	    switch(computerSelection) {
				case "rock":
					return [0,1];
          break;
        case "paper":
					return [0,0];
          break;
        case "scissors":
					return [1,0];
          break;
        default:
	    		return ("ERROR");
          break;
			}
      break;
    case "scissors":
	    switch(computerSelection) {
				case "rock":
					return [1,0];
          break;
        case "paper":
					return [0,1];
          break;
        case "scissors":
					return [0,0];
          break;
        default:
	    		return ("ERROR");
          break;
			}
      break;
    default:
			return ("ERROR");
	}
}

function game () {
	let computerWins = 0
	let playerWins = 0
	let rounds = 5
	for ( i = 0; i < rounds; i++) {
		const playerSelection = prompt()
		const computerSelection = computerPlay()
		const roundScore = playRound (playerSelection, computerSelection)
		computerWins += roundScore[0]
		playerWins += roundScore[1]
	}
	if (computerWins > playerWins) {
		console.log("Computer wins")
	} else {
		console.log("Player wins")
	}
	console.log("Score: computer "+computerWins+" player "+playerWins)
}

function updateScore (roundScore) {
	winner.textContent = "Waiting for a winner"
	computerWins += roundScore[0]
	playerWins += roundScore[1]
	console.log(roundScore)
	console.log("Score: computer "+computerWins+" player "+playerWins)
	content.textContent = "Score: computer "+computerWins+" player "+playerWins
	if (computerWins == 5 ) {
		winner.textContent = "Boooo. Computer WINS"
		computerWins = 0
		playerWins = 0
	}  
	if (playerWins == 5) {
		winner.textContent = "BRAVO. YOU WIN!!!!"
		computerWins = 0
		playerWins = 0
	}
}
//game()

// the JavaScript file
let computerWins = 0
let playerWins = 0
const btn_rock = document.querySelector('#rock');
const btn_paper = document.querySelector('#paper');
const btn_scissors = document.querySelector('#scissors');
const container = document.querySelector('#container');
const content = document.createElement('div');
const choices = document.createElement('div');
const winner = document.createElement('div');

content.classList.add('content');
content.textContent = 'Let the game begin'

container.appendChild(choices); 
container.appendChild(content);
container.appendChild(winner);
btn_rock.addEventListener('click', () => {
  let roundScore = playRound("rock",computerPlay())
	updateScore (roundScore)
});
btn_paper.addEventListener('click', () => {
  let roundScore = playRound("paper",computerPlay())
	updateScore (roundScore)
});
btn_scissors.addEventListener('click', () => {
  let roundScore = playRound("scissors",computerPlay())
	updateScore (roundScore)
});
