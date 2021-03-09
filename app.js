  //Function to randomly return 'rock' 'paper' or 'scissors'

  let choices = ['rock', 'paper', 'scissors'];
  function computerPlay(choices) {
      let index = Math.floor(Math.random() * choices.length);
      return choices[index];
  }

  //Function to take two parameters playerSelection and computerSelection, loop game until player or computer scores 5 points and then return a string that declares the winner of the game

  function game() {

      let myScore = 0;
      let pcScore = 0;


      while ((pcScore < 5) && (myScore < 5)) {

          function playRound(playerSelection, computerSelection) {

              if (playerSelection === "rock" && computerSelection === "paper") {
                  console.log("You Lose! Paper beats Rock");
                  pcScore++;
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "rock" && computerSelection === "rock") {
                  console.log("It's a tie!");
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "rock" && computerSelection === "scissors") {
                  console.log("You Win! Rock beats Scissors");
                  myScore++;
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "paper" && computerSelection === "rock") {
                  console.log("You Win! Paper beats Rock!");
                  myScore++;
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "paper" && computerSelection === "paper") {
                  console.log("It's a tie!");
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "paper" && computerSelection === "scissors") {
                  console.log("You Lose! Scissors beats Paper!");
                  pcScore++;
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "scissors" && computerSelection === "rock") {
                  console.log("You Lose! Rock beats Scissors!");
                  pcScore++;
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "scissors" && computerSelection === "paper") {
                  console.log("You Win! Scissors beats Paper!");
                  myScore++;
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else if (playerSelection === "scissors" && computerSelection === "scissors") {
                  console.log("It's a tie!");
                  console.log("Your score:" + " " + myScore + " " + "Computer score:" + " " + pcScore);
              } else {
                  console.log('Choose Rock Paper or Scissors');
              }
              if (myScore === 5) {
                  console.log("You won the game!");
              } else if (pcScore === 5) {
                  console.log("PC won the game!");
              }
              return [myScore, pcScore];
          }
          const computerSelection = computerPlay(choices);
          let promptChoice = prompt("Choose paper rock or scissors");
          const playerSelection = promptChoice.toLowerCase();
          console.log(playRound(playerSelection, computerSelection));
      }
  }


