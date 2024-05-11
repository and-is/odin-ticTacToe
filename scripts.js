function Player(name, icon) {
  this.name = name;
  this.icon = icon;
  this.turn = true;
  this.toggleTurn = () => {
    this.turn = !this.turn;
  };
}

const gameBoard = () => {
  let board = {};
  const player1 = new Player("Ram", "X");
  const player2 = new Player("Shyam", "O");
  let a = false;
  player2.toggleTurn();
  for (let i = 1; i < 10; i++) {
    board[i] = "";
    const bhaado = document.querySelector(`#a${i}`);
    bhaado.addEventListener("click", () => {
      if (!a) {
        if (board[i] === "") {
          if (player1.turn) {
            bhaado.innerText = player1.icon;
            board[i] = player1.icon;
            console.log(board);
            a = checkWin(board, player1, player2);
          } else if (player2.turn) {
            bhaado.innerText = player2.icon;
            board[i] = player2.icon;
            console.log(board);
            a = checkWin(board, player1, player2);
          }
          player2.toggleTurn();
          player1.toggleTurn();
        }
      }
    });
  }
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
      gameBoardState[9] === "X") ||
    (gameBoardState[3] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[7] &&
      gameBoardState[7] === "X")
  ) {
    const bhaado2 = document.querySelector(".declaration");
    bhaado2.textContent = player1.name + " wins!";
    return true;
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
      gameBoardState[9] === "O") ||
    (gameBoardState[3] === gameBoardState[5] &&
      gameBoardState[5] === gameBoardState[7] &&
      gameBoardState[7] === "O")
  ) {
    const bhaado2 = document.querySelector(".declaration");
    bhaado2.textContent = player2.name + " wins!";
    return true;
  } else if (Object.values(gameBoardState).every((x) => x !== "")) {
    const bhaado2 = document.querySelector(".declaration");
    bhaado2.textContent = "Draw";
    return true;
  } else {
    return false;
  }
};

gameBoard();
