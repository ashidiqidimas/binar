class Game {
  _results = {
    'human-rock_computer-rock': 'draw',
    'human-scissor_computer-scissor': 'draw',
    'human-paper_computer-paper': 'draw',
    'human-rock_computer-scissor': 'human-win',
    'human-scissor_computer-paper': 'human-win',
    'human-paper_computer-rock': 'human-win',
    'human-rock_computer-paper': 'computer-win',
    'human-scissor_computer-rock': 'computer-win',
    'human-paper_computer-scissor': 'computer-win',
  };

  play(userChosenShapeID, computerChosenShapeID) {
    const key = userChosenShapeID + '_' + computerChosenShapeID;
    const resultID = this._results[key];

    this._logFormattedResult(resultID);

    return resultID;
  }

  updateGame(resultID) {
    const vsElement = document.getElementById("vs");
    vsElement.classList.add("hidden");

    const cardElement = document.getElementById("result");
    if (cardElement.classList.contains("hidden"))
      cardElement.classList.remove("hidden");
    console.log(cardElement);

    const resultCardElement = document.getElementById(resultID);
    if (resultCardElement.classList.contains("hidden"))
      resultCardElement.classList.remove("hidden");
    console.log(resultCardElement);
  }

  restart() {
    const vsElement = document.getElementById("vs");
    vsElement.classList.remove("hidden");

    const drawElement = document.getElementById("draw");
    if (drawElement.classList.contains("hidden") === false)
      drawElement.classList.add("hidden");

    const humanWinElement = document.getElementById("human-win");
    if (humanWinElement.classList.contains("hidden") === false)
      humanWinElement.classList.add("hidden");

    const computerWinElement = document.getElementById("computer-win");
    if (computerWinElement.classList.contains("hidden") === false)
      computerWinElement.classList.add("hidden");

    const cardElement = document.getElementById("result");
    if (cardElement.classList.contains("hidden") === false)
      cardElement.classList.add("hidden");
  }

  _logFormattedResult(result) {
    let formattedResult;

    formattedResult = result.charAt(0).toUpperCase() + result.slice(1);

    if (result.includes("-")) {
      formattedResult = formattedResult.replace("-", " ");
    }

    if (result === "human-win") {
      formattedResult = formattedResult.concat(". Congratulation!");
    } else if (result === "computer-win") {
      formattedResult = formattedResult.concat(" :(");
    }

    console.log(formattedResult);
  }
}

export default Game;