document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".field"));

  window.game = game;

  setInterval(() => {
    game.changePosition();
  }, 1100);
});
