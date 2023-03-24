/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let inpt = document.getElementById("inpt");
let btnDraw = document.getElementById("btnDraw");
let btnSort = document.getElementById("btnSort");
let btnClear = document.getElementById("btnClear");
let crdContainer = document.getElementById("crdContainer");
let crdLog = document.getElementById("crdLog");

let cards = [];

const drawCard = () => {
  let cntnr = document.createElement("div");
  let suit = document.createElement("div");
  let suit2 = document.createElement("div");
  let numb = document.createElement("div");

  cntnr.classList = "crdContainer d-flex justify-content-around shadow";
  numb.classList = "d-flex align-items-center";
  suit.classList = "uppSuit";
  suit2.classList = "btmSuit";

  let crdSuit = getSuits();
  suit.innerHTML = crdSuit;
  suit2.innerHTML = crdSuit;
  let value = getRandomInt();
  numb.innerHTML = giveValue(value);

  cards.push({ value, crdSuit });

  cntnr.appendChild(suit);
  cntnr.appendChild(numb);
  cntnr.appendChild(suit2);

  if (crdSuit == "♦" || crdSuit == "♥") {
    cntnr.classList.add("text-danger");
  }

  crdContainer.appendChild(cntnr);
};

const drawCards = () => {
  const numCards = parseInt(inpt.value);

  for (let i = 0; i < numCards; i++) {
    drawCard();
  }
};

btnClear.addEventListener("click", () => {
  crdContainer.innerHTML = "";
  crdLog.innerHTML = "";
  cards = [];
  console.clear();
});

btnDraw.addEventListener("click", () => {
  cards = [];
  crdContainer.innerHTML = "";
  drawCards();
});

btnSort.addEventListener("click", () => {
  bubbleSort(cards);
});

const drawRow = cardsArray => {
  let row = document.createElement("div");
  row.classList = "d-flex my-2";

  for (let card of cardsArray) {
    let cntnr = document.createElement("div");
    let suit = document.createElement("div");
    let suit2 = document.createElement("div");
    let numb = document.createElement("div");

    cntnr.classList = "crdContainer d-flex justify-content-around shadow";
    numb.classList = "d-flex align-items-center";
    suit.classList = "uppSuit";
    suit2.classList = "btmSuit";

    let crdSuit = card.crdSuit;
    suit.innerHTML = crdSuit;
    suit2.innerHTML = crdSuit;
    let value = card.value;
    numb.innerHTML = giveValue(value);

    cntnr.appendChild(suit);
    cntnr.appendChild(numb);
    cntnr.appendChild(suit2);

    if (crdSuit == "♦" || crdSuit == "♥") {
      cntnr.classList.add("text-danger");
    }

    row.appendChild(cntnr);
  }
  return row;
};

const bubbleSort = arr => {
  crdLog.innerHTML = "";
  const clone = arr.map(card => ({ ...card }));
  let wall = clone.length - 1;
  let counter = 0;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (clone[index].value > clone[index + 1].value) {
        let aux = clone[index];
        clone[index] = clone[index + 1];
        clone[index + 1] = aux;
        const h4 = document.createElement("h4");
        h4.classList = "d-flex";
        h4.innerHTML = counter;
        crdLog.appendChild(h4);
        counter++;

        // Draw the cards after each swap
        const row = drawRow(clone);
        // console.log(row);
        crdLog.appendChild(row);
      }
      index++;
    }
    wall--;
  }
  return clone;
};

function giveValue(value) {
  if (value == 1) return "A";
  if (value == 11) return "J";
  if (value == 12) return "Q";
  if (value == 13) return "K";
  return value;
}

function getRandomInt() {
  return Math.floor(Math.random() * 13) + 1;
}

function getSuits() {
  return getSuit(Math.floor(Math.random() * 4) + 1);
}

function getSuit(suitNumber = 0) {
  switch (suitNumber) {
    case 1:
      return "♦";
    case 2:
      return "♥";
    case 3:
      return "♠";
    case 4:
      return "♣";
  }
}

// let name = "";
// let lastName = "";
// let fullName = { name, lastName }; // {name: name, lastName: lastName}
// console.log(fullName);

// let variable = "name";
// let person = {};
// person[variable] = "Ri T";
// console.log(person);
