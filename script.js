const score1 = document.getElementById("button1");
const score2 = document.getElementById("button2");
const diceimg = document.getElementById("image");
const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
const winner = document.getElementById("winner");
const reset = document.getElementById("reset");
let currentscore1 = 0;
let currentscore2 = 0;

score1.innerText = 0;
score2.innerText = 0;
let activePlayer = "player1";

roll1.addEventListener("click", () => {
  if (activePlayer === "player1") {
    rollDice("player1");
    activePlayer = "player2";
    roll1.disabled = true;
    roll2.disabled = false;
    winner.innerText = "Player 2 to Play";
  }
});

roll2.addEventListener("click", () => {
  if (activePlayer === "player2") {
    rollDice("player2");
    activePlayer = "player1";
    roll1.disabled = false;
    roll2.disabled = true;
    winner.innerText = "Player 1 to Play";
  }
});

function rollDice(player) {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceimg.src = `./image/dice-${roll}.png`;

  if (player === "player1") {
    currentscore1 += roll;
    score1.textContent = currentscore1;
  } else if (player === "player2") {
    currentscore2 += roll;
    score2.textContent = currentscore2;
  }

  checkWinner();
}

function checkWinner() {
  if (currentscore1 >= 30 || currentscore2 >= 30) {
    roll1.disabled = true;
    roll2.disabled = true;

    if (currentscore1 >= 30 && currentscore2 >= 30) {
      winner.innerText = "***IT IS TIE!***";
      winner.style.color = "brown";
      restgame();
    } else if (currentscore1 >= 30) {
      winner.innerText = "***PLAYER 1 - WINNER***";
      winner.style.color = "brown";
      restgame();
    } else {
      winner.innerText = "***PLAYER 2 - WINNER***";
      winner.style.color = "brown";
      restgame();
    }
  }
}
reset.addEventListener("click", () => {
  location.reload();
});
