class Game {
  constructor(field) {
    this.field = field;
    this.columns = this.field.querySelectorAll(".fieldColumn");
    this.column;
    this.cell;
  }

  changePosition() {
    const img = document.createElement("img");
    img.src = "../src/js/game/img/goblin.png";

    let newRandomColumn = getRandomInt(4);
    let newRandomCell = getRandomInt(4);

    while (newRandomColumn == this.column && newRandomCell == this.cell) {
      newRandomColumn = getRandomInt(4);
      newRandomCell = getRandomInt(4);
    }

    this.column = newRandomColumn;
    this.cell = newRandomCell;

    this.columns[this.column]
      .querySelectorAll(".fieldCell")
      [this.cell].appendChild(img);

    setTimeout(() => {
      this.columns[this.column]
        .querySelectorAll(".fieldCell")
        [this.cell].querySelector("img")
        .remove();
    }, 1000);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
