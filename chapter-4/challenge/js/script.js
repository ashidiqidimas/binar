import Game from './game.js';
import Human from './players/human.js';
import Computer from './players/computer.js';

const human = new Human();
const computer = new Computer();
const game = new Game();

function chooseShapeCallback(userChosenShapeID) {
  // Just in case the user play again without click restart button first
  restartCallback();

  const computerChosenShapeID = computer.getShape();
  computer.updateShape(computerChosenShapeID);

  human.updateShape(userChosenShapeID);

  const resultID = game.play(userChosenShapeID, computerChosenShapeID);
  game.updateGame(resultID);
}

human.addButtonListeners(chooseShapeCallback);

function restartCallback() {
  game.restart();
  human.restart();
  computer.restart();
}

const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", restartCallback);
