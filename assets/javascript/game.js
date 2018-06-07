var playerWins = 0;
var playerLosses = 0;
let topazVal, garnetVal, emeraldVal, diamondVal;
let input;

function updateScore(val) {
	playerScore = 0;
	if (val) {
		input.push(val);
	}
	if (input.length >= 1) {
		for (let i = 0; i < input.length; i++) {
			playerScore += input[i];
		}
	}
	$('#score').text(playerScore);
}

function checkVal() {
	console.log(playerScore, target);
	if (playerScore > target) {
		console.log('You lose.');
		resetScore();
		game();
	} else {
		if(playerScore < target) {
			console.log('not yet');
		} else if (playerScore === target) {
			console.log('you win!');
			updateStreak();
			game();
		}
	}
}

function resetScore() {
	playerLosses++;
	playerScore = 0;
	$('#losses').text(playerLosses);
}
function updateStreak() {
	playerWins++;
	playerScore = 0;
	$('#wins').text(playerWins);
}

function game() {
	input = [];
	updateScore();
	target = randInt(19, 120);
	$('#target').text(target);
	topazVal = randInt(1, 12);
	garnetVal = randInt(1, 12);
	emeraldVal = randInt(1, 12);
	diamondVal = randInt(1, 12);
}

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
game();

$('#topaz').click(function() {
  updateScore(topazVal);
  checkVal();
});
$('#garnet').click(function() {
  updateScore(garnetVal);
  checkVal();
});
$('#emerald').click(function(){
  updateScore(emeraldVal);
  checkVal();
});
$('#diamond').click(function() {
  updateScore(diamondVal);
  checkVal();
});


$("#diamond")
	.text("")
	.append("<img src='../../assets/images/diamond.png' width='80' height='80'  />")

$("#emerald")
	.text("")
	.append("<img src='../../assets/images/emerald.png' width='80' height='80'  />")

$("#garnet")
	.text("")
	.append("<img src='../assets/images/garnet.png' width='80' height='80'  />")

$("#topaz")
	.text("")
	.append("<img src='../assets/images/topaz.png' width='80' height='80'  />")


