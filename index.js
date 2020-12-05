import { LEVEL, OBJECT_TYPE } from "./setup";
import { randomMovement } from "./Ghost";

//Classes
import GameBoard from "./GameBoard";
import Pacman from "./Pacman";
import Ghost from "./Ghost";

// Sounds
import soundDot from "./sounds/munch.wav";
import soundPill from "./sounds/pill.wav";
import soundGameStart from "./sounds/game_start.wav";
import soundGameOver from "./sounds/death.wav";
import soundGhost from "./sounds/eat_ghost.wav";

//Dom elements
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");
const instructionButton = document.querySelector("#instructions-button");

//Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; // speed for the gameloop, in ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

// --- AUDIO --- //
function playAudio(audio) {
  const soundEffect = new Audio(audio);
  soundEffect.play();
}

function gameOver(pacman, grid) {
  playAudio(soundGameOver);
  document.removeEventListener("keydown", (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist)
  );

  gameBoard.showGameStatus(gameWin);

  clearInterval(timer);

  startButton.classList.remove("hide");
  instructionButton.classList.remove("hide");
}

function checkCollision(pacman, ghosts) {
  const collidedGhost = ghosts.find((ghost) => pacman.pos === ghost.pos);

  if (collidedGhost) {
    if (pacman.powerPill) {
      playAudio(soundGhost);
      gameBoard.removeObject(collidedGhost.pos, [
        OBJECT_TYPE.GHOST,
        OBJECT_TYPE.SCARED,
        collidedGhost.name,
      ]);
      collidedGhost.pos = collidedGhost.startPos;
      score += 100;
    } else {
      gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);
      gameBoard.rotateDiv(pacman.pos, 0);
      gameOver(pacman, gameGrid);
    }
  }
}

//game loop handles the movement of characters, it executes everytime it completes it's interval
function gameLoop(pacman, ghosts) {
  //move pacman
  gameBoard.moveCharacter(pacman);
  checkCollision(pacman, ghosts);

  ghosts.forEach((ghost) => {
    gameBoard.moveCharacter(ghost);
  });
  checkCollision(pacman, ghosts);

  //let pacman eat dots. first check to see if where pacman moves, there is a dot
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.DOT)) {
    playAudio(soundDot);
    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.DOT]);
    gameBoard.dotCount--;

    //give 10 points for eating a dot
    score += 10;
  }

  //check if pacman eats a powerPill
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.PILL)) {
    playAudio(soundPill);
    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PILL]);

    pacman.powerPill = true;
    score += 50;

    clearTimeout(powerPillTimer);
    powerPillTimer = setTimeout(
      () => (pacman.powerPill = false),
      POWER_PILL_TIME
    );
  }

  // Change ghosts into scare mode if powerpill eaten
  if (pacman.powerPill !== powerPillActive) {
    powerPillActive = pacman.powerPill;
    ghosts.forEach((ghost) => (ghost.isScared = pacman.powerPill));
  }

  //Check if all dots have been eaten
  if (gameBoard.dotCount === 0) {
    gameWin = true;
    gameOver(pacman, ghosts);
  }

  //show score on scoreboard
  scoreTable.innerHTML = score;
}

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

//function is ran when start button is pressed
function startGame() {
  playAudio(soundGameStart);

  //hide start and instructions button at start of game and reset previous values
  gameWin = false;
  powerPillActive = false;
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
    pacman.handleKeyInput(e, gameBoard.objectExist)
  );

  //create ghosts
  const ghosts = [
    new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
    new Ghost(4, 209, randomMovement, OBJECT_TYPE.INKY),
    new Ghost(3, 230, randomMovement, OBJECT_TYPE.CLYDE),
    new Ghost(2, 251, randomMovement, OBJECT_TYPE.PINKY),
  ];

  // Gameloop, start the interval that will run the game loop function, run gameLoop every 80ms
  timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);
}

//Initialize game when button is pressed
startButton.addEventListener("click", startGame);

//display instructions when instructions button is pressed
instructionButton.addEventListener("click", getInstructions);
