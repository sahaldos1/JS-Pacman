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
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Initial setup
let score = 0;
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

function startGame() {
  gameWin = false;
  score = 0;

  //hide start button at start of game and reset previous values
  startButton.classList.add("hide");
  instructionButton.classList.add("hide");

  //create the game baord
  gameBoard.createGrid(LEVEL);

  //create and put pacman on the grid
  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
}

//Initialize game

startButton.addEventListener("click", startGame);

instructionButton.addEventListener("click", getInstructions);
