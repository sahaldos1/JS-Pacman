import { LEVEL, OBJECT_TYPE } from "./basics";

//Classes
import GameBoard from "./GameBoard";
import Pacman from "./Pacman";

//Dom elements
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");
const instructionButton = document.querySelector("#instructions-button");

//Game constants
const GLOBAL_SPEED = 80; // speed for the gameloop, in ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Initial setup
let score = 0;
let timer = null;
let gameWin = false;

function getInstructions() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("instructions-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

//game loop handles the movement of characters, it executes everytime it completes it's interval
function gameLoop(pacman, ghosts) {
  //move pacman
  gameBoard.moveCharacter(pacman);

  //let pacman eat dots. first check to see if where pacman moves, there is a dot
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.DOT)) {
    //remove the dot from the gameboard and decrease the dotcount
    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.DOT]);
    gameBoard.dotCount--;

    //give 10 points for eating a dot
    score += 10;
  }

  //show score on scoreboard
  scoreTable.innerHTML = score;
}

//function is ran when start button is pressed
function startGame() {
  //hide start and instructions button at start of game and reset previous values

  gameWin = false;
  score = 0;

  startButton.classList.add("hide");
  instructionButton.classList.add("hide");

  //create the new game grid from the game board each time we start a new game
  gameBoard.createGrid(LEVEL);

  //create pacman with a speed of two and put on the grid
  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);

  //add event listener for pacman so we can move him with our keyboard
  document.addEventListener("keydown", (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );

  // Gameloop, start the interval that will run the game loop function, run gameLoop every 80ms
  timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);
}

//Initialize game when button is pressed
startButton.addEventListener("click", startGame);

//display instructions when instructions button is pressed
instructionButton.addEventListener("click", getInstructions);
