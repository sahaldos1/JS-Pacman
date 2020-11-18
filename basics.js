//size of gameboard
export const GRID_SIZE = 20;
export const CELL_SIZE = 20;

//various kinds of objects
export const OBJECT_TYPE = {
  BLANK: "blank",
  WALL: "wall",
  DOT: "dot",
  BLINKY: "blinky",
  PINKY: "pinky",
  INKY: "inky",
  CLYDE: "clyde",
  PILL: "pill",
  PACMAN: "pacman",
  GHOST: "ghost",
  SCARED: "scared",
  GHOSTLAIR: "lair",
};

// Lookup array for classes
export const CLASS_LIST = [
  OBJECT_TYPE.BLANK,
  OBJECT_TYPE.WALL,
  OBJECT_TYPE.DOT,
  OBJECT_TYPE.BLINKY,
  OBJECT_TYPE.PINKY,
  OBJECT_TYPE.INKY,
  OBJECT_TYPE.CLYDE,
  OBJECT_TYPE.PILL,
  OBJECT_TYPE.PACMAN,
  OBJECT_TYPE.GHOSTLAIR,
];

// hard coded game board
export const LEVEL = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  7,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  7,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  2,
  1,
  2,
  1,
  9,
  9,
  9,
  9,
  1,
  2,
  1,
  2,
  1,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  9,
  9,
  9,
  9,
  1,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  2,
  2,
  2,
  1,
  9,
  9,
  9,
  9,
  1,
  2,
  2,
  2,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  9,
  9,
  9,
  9,
  1,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  2,
  1,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  1,
  2,
  1,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  1,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  7,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  7,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];
