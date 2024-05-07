let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userParagraph = document.querySelector("#user-score");
const compParagraph = document.querySelector("#com-user");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};

const drawGame = () => {
  msg.innerText = "Game was a draw. Play again!";
  msg.style.backgroundColor = "blue";
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;
    if (
      (userChoice === "rock" && compChoice === "scissor") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissor" && compChoice === "paper")
    ) {
      userWin = true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userParagraph.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compParagraph.innerText = computerScore;
    msg.innerText = `Computer wins! Your ${userChoice} loses to ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
