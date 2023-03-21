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

      let crdSuit = getSuits();
      // let colour = giveColour();
      suit.innerHTML = crdSuit;
      suit2.innerHTML = crdSuit;
      let value = getRandomInt();
      numb.innerHTML = giveValue(value);

      cards.push({ value, crdSuit });
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

    console.log("Your cards have been sorted");
    const sortedCards = bubbleSort(cards);
    // const newCards = bubbleSort(newArray);

    sortedCards.forEach(card => {
      let cntnr = document.createElement("div");
      let suit = document.createElement("div");
      let suit2 = document.createElement("div");
      let numb = document.createElement("div");

      cntnr.classList = "crdContainer d-flex justify-content-around shadow";
      numb.classList = "d-flex align-items-center";
      suit.classList = "uppSuit";
      suit2.classList = "btmSuit";

      suit.innerHTML = card.crdSuit;
      suit2.innerHTML = card.crdSuit;
      numb.innerHTML = giveValue(card.value);

      cntnr.appendChild(suit);
      cntnr.appendChild(numb);
      cntnr.appendChild(suit2);

      crdLog.appendChild(cntnr);
    });
    console.log(sortedCards);
    // newCards.forEach(card => {
    //   let cntnr = document.createElement("div");
    //   let suit = document.createElement("div");
    //   let suit2 = document.createElement("div");
    //   let numb = document.createElement("div");

    //   cntnr.classList = "crdContainer d-flex justify-content-around shadow";
    //   numb.classList = "d-flex align-items-center";
    //   suit.classList = "uppSuit";
    //   suit2.classList = "btmSuit";

    //   suit.innerHTML = card.crdSuit;
    //   suit2.innerHTML = card.crdSuit;
    //   numb.innerHTML = giveValue(card.value);

    //   cntnr.appendChild(suit);
    //   cntnr.appendChild(numb);
    //   cntnr.appendChild(suit2);

    //   crdLog.appendChild(cntnr);
    // });

    cards = [];
  });

  //write your code here
  console.log("If you are reading this.. well hello!");
};

function giveValue(value) {
  if (value == 1) return "A";
  if (value == 11) return "J";
  if (value == 12) return "Q";
  if (value == 13) return "K";
  return value;
}
// function giveColour(crdSuit) {
//   if (crdSuit == "♦" || crdSuit == "♥") return (style.color = "red");
//   return crdSuit;
// }
// if (result == "♦" || result == "♥") {
//   upperSuit.style.color = "red";
//   bottmSuit.style.color = "red";
//   middleNum.style.color = "red";
// } else {
//   upperSuit.style.color = "black";
//   bottmSuit.style.color = "black";
//   middleNum.style.color = "black";
// }

function getRandomInt() {
  return Math.floor(Math.random() * 13) + 1;
}

function getSuits() {
  return getSuit(Math.floor(Math.random() * 4) + 1);
  // if (theSuits == "♦" || theSuits == "♥") {
  //   theSuits.style.color = "red";
  // }
  // return theSuits;
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

let crdSuit = getSuits();
let int = getRandomInt();

console.log("Is this your card? " + "The " + int + " of " + crdSuit);

let newArray = [];

const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  let counter = 0;
  while (wall > 0) {
    let index = 0;
    let row = document.createElement("div");
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].value > arr[index + 1].value) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
        let cntnr = document.createElement("div");
        let suit = document.createElement("div");
        let suit2 = document.createElement("div");
        let numb = document.createElement("div");

        cntnr.classList = "crdContainer d-flex justify-content-around shadow";
        numb.classList = "d-flex align-items-center";
        suit.classList = "uppSuit";
        suit2.classList = "btmSuit";

        suit.innerHTML = arr[index].crdSuit;
        suit2.innerHTML = arr[index].crdSuit;
        numb.innerHTML = giveValue(arr[index].value);

        cntnr.appendChild(suit);
        cntnr.appendChild(numb);
        cntnr.appendChild(suit2);

        row.appendChild(cntnr);
        // let p = document.createElement("div");
        // p.classList.add("row");
        // p.innerHTML = counter;
        // crdLog.appendChild(p);
        counter++;
        newArray.push(arr[index]);
      }
      // console.log(newArray);
      index++;
    }
    crdLog.appendChild(row);
    wall--; //decrease the wall for optimization
  }
  console.log(`Cards sorted in ${counter} iterations`);
  // console.log(cards);
  console.log(newArray);
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
