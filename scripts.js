const gameBoard = () => {
  const row = 3;
  const column = 3;
  const board = {};
  for (let i = 0; i < row * column; i++) {
    board[i + 1] = "";
  }
  return board;
};

const updateBoard = (board, input, icon) => {
  board[input] = icon;
};

const checkWin = (gameBoardState, player1, player2) => {
  if (
    (gameBoardState[1] === gameBoardState[2] &&
      gameBoardState[2] === gameBoardState[3] &&
      gameBoardState[3] === "X") ||
    (gameBoardState[4] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[6] &&
      gameBoardState[6] === "X") ||
    (gameBoardState[7] === gameBoardState[8] &&
      gameBoardState[8] === gameBoardState[9] &&
      gameBoardState[9] === "X") ||
    (gameBoardState[1] === gameBoardState[4] &&
      gameBoardState[4] === gameBoardState[7] &&
      gameBoardState[7] === "X") ||
    (gameBoardState[2] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[8] &&
      gameBoardState[8] === "X") ||
    (gameBoardState[3] === gameBoardState[6] &&
      gameBoardState[6] === gameBoardState[9] &&
      gameBoardState[9] === "X") ||
    (gameBoardState[1] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[9] &&
      gameBoardState[9] === "X")
  ) {
    console.log("Game Over");
    console.log(player1.name + " wins!");
    return false;
  } else if (
    (gameBoardState[1] === gameBoardState[2] &&
      gameBoardState[2] === gameBoardState[3] &&
      gameBoardState[3] === "O") ||
    (gameBoardState[4] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[6] &&
      gameBoardState[6] === "O") ||
    (gameBoardState[7] === gameBoardState[8] &&
      gameBoardState[8] === gameBoardState[9] &&
      gameBoardState[9] === "O") ||
    (gameBoardState[1] === gameBoardState[4] &&
      gameBoardState[4] === gameBoardState[7] &&
      gameBoardState[7] === "O") ||
    (gameBoardState[2] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[8] &&
      gameBoardState[8] === "O") ||
    (gameBoardState[3] === gameBoardState[6] &&
      gameBoardState[6] === gameBoardState[9] &&
      gameBoardState[9] === "O") ||
    (gameBoardState[1] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[9] &&
      gameBoardState[9] === "O")
  ) {
    console.log("Game Over");
    console.log(player2.name + " wins!");
    return false;
  } else if (Object.values(gameBoardState).every((x) => x !== "")) {
    console.log("Draw");
    return false;
  } else {
    return true;
  }
};
function player(name, icon) {
  this.name = name;
  this.icon = icon;
}
const playGame = () => {
  const player1 = new player("Ram", "X");
  const player2 = new player("Shyam", "O");

  let gameBoardState = gameBoard();

  const takeInput = (player) => {
    let input = prompt(
      "Enter number, you're " + player.name + " Icon: " + player.icon
    );
    input = parseInt(input);
    while (true) {
      if (!gameBoardState[input] && !(input < 1) && !(input > 9) && input) {
        updateBoard(gameBoardState, input, player.icon);
        break;
      } else {
        console.log("Invalid");
        input = input = prompt(
          "Enter number, you're " + player.name + " Icon: " + player.icon
        );
      }
    }
  };

  while (true) {
    console.log(gameBoardState);
    takeInput(player1);
    console.log(gameBoardState);
    if (!checkWin(gameBoardState, player1, player2)) break;
    takeInput(player2);
    console.log(gameBoardState);
    if (!checkWin(gameBoardState, player1, player2)) break;
  }
};
playGame();
