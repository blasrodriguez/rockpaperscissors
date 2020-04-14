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
          return ("Tie! Rock N Rock");
          break;
        case "paper":
          return ("You Lose! Paper beats Rock");
          break;
        case "scissors":
          return ("WIN! Rock crushes scissors");
          break;
        default:
	    		return ("ERROR");
          break;
			}
			break;
    case "paper":
	    switch(computerSelection) {
				case "rock":
          return ("WIN! Paper beats rock");
          break;
        case "paper":
          return ("TIE! Paperization");
          break;
        case "scissors":
          return ("You Lose! Scissors beats paper");
          break;
        default:
	    		return ("ERROR");
          break;
			}
      break;
    case "scissors":
	    switch(computerSelection) {
				case "rock":
          return ("You Lose! Rocks beats scissors");
          break;
        case "paper":
          return ("WIN! scissors cuts paper");
          break;
        case "scissors":
          return ("TIE! Tiejeretazo");
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

const playerSelection = prompt()
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
