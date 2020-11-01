import { LEVEL, OBJECT_TYPE } from "./setup";
import { randomMovement } from "./ghostmoves";

//Classes
import GameBoard from "./GameBoard";
import Pacman from "./Pacman";
import Ghost from "./Ghost";

//Dom elements
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

//Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 90; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {}

function checkPositon(pacman, ghosts) {}

function gameLoop(pacman, ghosts) {
  gameBoard.moveCharacter(pacman);
  ghosts.forEach((ghost) => {
    gameBoard.moveCharacter(ghost);
  });
}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;

  //hide start button at start of game and reset previous values
  startButton.classList.add("hide");

  //create the game baord
  gameBoard.createGrid(LEVEL);

  //create and put pacman on the grid
  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);

  document.addEventListener("keydown", (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist)
  );

  //create ghosts
  const ghosts = [
    new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
    new Ghost(4, 209, randomMovement, OBJECT_TYPE.INKY),
    new Ghost(3, 230, randomMovement, OBJECT_TYPE.CLYDE),
    new Ghost(2, 251, randomMovement, OBJECT_TYPE.PINKY),
  ];

  timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);
}

//Initialize game

startButton.addEventListener("click", startGame);
