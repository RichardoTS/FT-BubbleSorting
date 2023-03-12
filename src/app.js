/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  btnDraw.addEventListener("click", () => {
    crdContainer.innerHTML = "";
    crdLog.innerHTML = "";
    getRandomInt(inpt.value);
  });

  btnSort.addEventListener("click", () => {
    crdLog.innerHTML = "";
  });
  //write your code here
  console.log("If you are reading this.. well hello!");
};

let inpt = document.getElementById("inpt");
let btnDraw = document.getElementById("btnDraw");
let btnSort = document.getElementById("btnSort");
let crdContainer = document.getElementById("crdContainer");
let uppSuit = document.getElementById("uppSuit");
let mdlNum = document.getElementById("mdlNum");
let btmSuit = document.getElementById("btmSuit");
let crdLog = document.getElementById("crdLog");

function deckBuilder() {
  function getRandomInt() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber == 1) {
      return "A";
    } else if (randomNumber == 11) {
      return "J";
    } else if (randomNumber == 12) {
      return "Q";
    } else if (randomNumber == 13) {
      return "K";
    }
    return randomNumber;
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
  function getSuits() {
    let theSuits = getSuit(Math.floor(Math.random() * 4) + 1);
    return theSuits;
  }
}
let result = getSuits();

uppSuit.innerHTML = result;
mdlNum.innerHTML = getRandomInt();
btmSuit.innerHTML = result;
uppSuit.appendChild = result;
mdlNum.appendChild = getRandomInt();
btmSuit.appendChild = result;

console.log(getSuits());
