import { Level, Object_type } from "./setup";

//Dom elements
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

//Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 90; //ms

//Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPullActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {}

function checkPositon(pacman, ghosts) {}

function gameLoop(pacman, ghosts) {}

function startGame() {}
