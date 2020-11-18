import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from "./basics";

class GameBoard {
  //basic constructor
  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  //create a gameboard with the hardcoded gameboard that's passed in
  createGrid(level) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = "";
    // First set correct amount of columns and rows based on Grid Size and Cell Size
    this.DOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);`;

    level.forEach((square) => {
      const div = document.createElement("div");
      div.classList.add("square", CLASS_LIST[square]);
      div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`;
      this.DOMGrid.appendChild(div);
      this.grid.push(div);

      // Add dots
      if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
    });
  }

  //allows us to add objects on to the grid
  addObject(pos, classes) {
    //pos is the position and classes is just the class of the object to be added
    this.grid[pos].classList.add(...classes);
  }

  //creates a gameboard
  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }
}

export default GameBoard;
