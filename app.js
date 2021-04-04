  //Function to randomly return 'rock' 'paper' or 'scissors'

  let choices = ['rock', 'paper', 'scissors'];
  function computerPlay(choices) {
      let index = Math.floor(Math.random() * choices.length);
      return choices[index];
  }

  //Add event listener for selection

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {

  img.addEventListener('click', (e) => {
    const computerSelection = computerPlay(choices);
      playRound(e.target.id, computerSelection);
  });
});

  //Function to take two parameters playerSelection and computerSelection, loop game until player or computer scores 5 points and then return a string that declares the winner of the game


    let myScore = 0;
    let pcScore = 0;

    while ((pcScore < 5) && (myScore < 5)) {

          function playRound(playerSelection, computerSelection) {
              const result1 = document.querySelector('.result1');
              const result2 = document.querySelector('.result2');

              if (playerSelection === "rock" && computerSelection === "paper") {
                  result1.textContent = "You Lose! Paper beats Rock";
                  pcScore++;
                  result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "rock" && computerSelection === "rock") {
                result1.textContent = "It's a tie!";
                result2.textContent ="Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "rock" && computerSelection === "scissors") {
                result1.textContent = "You Win! Rock beats Scissors";
                  myScore++;
                  result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "paper" && computerSelection === "rock") {
                result1.textContent = "You Win! Paper beats Rock!";
                  myScore++;
                  result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "paper" && computerSelection === "paper") {
                result1.textContent = "It's a tie!";
                result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "paper" && computerSelection === "scissors") {
                result1.textContent = "You Lose! Scissors beats Paper!";
                  pcScore++;
                  result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "scissors" && computerSelection === "rock") {
                result1.textContent = "You Lose! Rock beats Scissors!";
                  pcScore++;
                  result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "scissors" && computerSelection === "paper") {
                result1.textContent = "You Win! Scissors beats Paper!";
                  myScore++;
                  result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              } else if (playerSelection === "scissors" && computerSelection === "scissors") {
                result1.textContent = "It's a tie!";
                result2.textContent = "Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore;
              }  if (myScore === 5) {
                result1.textContent = "You won the game!";
              } else if (pcScore === 5) {
                result1.textContent = "PC won the game!";
              }
              return [myScore, pcScore];
          }
          result.textContent = playRound(playerSelection, computerSelection);
        }


