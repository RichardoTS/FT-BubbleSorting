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
// [{nombre: "asdf", apellido: "asdf1"}] to consider
let cards = [];

window.onload = function() {
  btnClear.addEventListener("click", () => {
    crdContainer.innerHTML = "";
    crdLog.innerHTML = "";
    cards = [];
    console.clear();
  });

  btnDraw.addEventListener("click", () => {
    crdContainer.innerHTML = "";
    crdLog.innerHTML = "";
    console.log("These are your cards");
    const numCards = parseInt(inpt.value);

    for (let i = 0; i < numCards; i++) {
      let cntnr = document.createElement("div");
      let suit = document.createElement("div");
      let suit2 = document.createElement("div");
      let numb = document.createElement("div");

      cntnr.classList = "crdContainer d-flex justify-content-around shadow";
      numb.classList = "d-flex align-items-center";
      suit.classList = "uppSuit";
      suit2.classList = "btmSuit";

      let result = getSuits();
      suit.innerHTML = result;
      suit2.innerHTML = result;
      let value = getRandomInt();
      numb.innerHTML = value;

      cards.push({ value, result });
      console.log(cards);

      cntnr.appendChild(suit);
      cntnr.appendChild(numb);
      cntnr.appendChild(suit2);
      console.log(cntnr);

      crdContainer.appendChild(cntnr);
    }
  });

  btnSort.addEventListener("click", () => {
    crdLog.innerHTML = "";

    let cntnr = document.createElement("div");
    let suit = document.createElement("div");
    let suit2 = document.createElement("div");
    let numb = document.createElement("div");

    cntnr.classList = "crdContainer d-flex justify-content-around shadow";
    numb.classList = "d-flex align-items-center";
    suit.classList = "uppSuit";
    suit2.classList = "btmSuit";

    console.log("Your cards have been sorted");
    let crdSort = bubbleSort(cards);

    cntnr.innerHTML = crdSort;
    crdLog.appendChild(cntnr);
    cards = [];
  });

  //write your code here
  console.log("If you are reading this.. well hello!");
};

// crear una funcion con el if
// if (randomNumber == 1) {
//   return "A";
// } else if (randomNumber == 11) {
//   return "J";
// } else if (randomNumber == 12) {
//   return "Q";
// } else if (randomNumber == 13) {
//   return "K";
// }
// return randomNumber;
// }

// getrandomint generar el numero random
function getRandomInt() {
  return Math.floor(Math.random() * 13) + 1;
}

function getSuits() {
  let theSuits = getSuit(Math.floor(Math.random() * 4) + 1);
  return theSuits;
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
// if (result == "♦" || result == "♥") {
//   upperSuit.style.color = "red";
//   bottmSuit.style.color = "red";
//   middleNum.style.color = "red";
// } else {
//   upperSuit.style.color = "black";
//   bottmSuit.style.color = "black";
//   middleNum.style.color = "black";
// }

let result = getSuits();
let int = getRandomInt();

console.log("Is this your card? " + "The " + int + " of " + result);

const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].value > arr[index + 1].value) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  console.log(cards);
  return arr;
};

// let name = "";
// let lastName = "";
// let fullName = { name, lastName }; // {name: name, lastName: lastName}
// console.log(fullName);

// let variable = "name";
// let person = {};
// person[variable] = "Ri T";
// console.log(person);
