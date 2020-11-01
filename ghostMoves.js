import { DIRECTIONS, OBJECT_TYPE } from "./setup";

//Primitive random movement
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;

  //create an array from the directions object keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    //get a random key from the key array
    const key = keys[Math.floor(Math.random() * keys.length)];
    //set next move
    dir = DIRECTIONS[key];
    //set the next position
    nextMovePos = position + dir.movement;
    //constantly changes direction of ghost until theres a direction that doesn't collide with a wall or ghost
  }

  return { nextMovePos, direction: dir };
}
