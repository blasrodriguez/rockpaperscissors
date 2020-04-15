function computerPlay() {
	let computerNumericChoice = Math.floor(Math.random() * 3);
	switch(computerNumericChoice) {
    case 0:
      return ("rock");
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
game()
