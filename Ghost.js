import { DIRECTIONS, OBJECT_TYPE } from "./setup";

class Ghost {
  constructor(speed, startpos, movement, name) {
    this.name = name;
    this.movement = movement;
    this.startPos = startpos;
    this.pos = this.startPos;
    this.dir = DIRECTIONS.ArrowRight;
    this.speed = speed;
    this.timer = 0;
    this.isScared = false;
    this.rotation = false;
  }

  shouldMove() {
    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }
    this.timer++;
    return false;
  }

  getNextMove(objectExist) {
    const { nextMovePos, direction } = this.movement(
      this.pos,
      this.dir,
      objectExist
    );
    return { nextMovePos, direction };
  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name];

    let classesToAdd = [OBJECT_TYPE.Ghost, this.name];

    if (this.isScared) {
      classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED];
    }

    return { classesToAdd, classesToRemove };
  }

  setNewPos(nextMovePos, direction) {
    this.pos = nextMovePos;
    this.dir = direction;
  }
}
