import { Game } from "./game/game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".field"));
  let gameStart = false;

  window.game = game;

  setInterval(() => {
    if (gameStart) {
      game.deleteLast();
    }
    game.changePosition();
    gameStart = true;
  }, 1000);
});
