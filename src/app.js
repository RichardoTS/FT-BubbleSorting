/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("If you are reading this.. well hello!");
};

let inpt = document.getElementById("inpt");
let btnDraw = document.getElementById("btnDraw");
let btnSort = document.getElementById("btnSort");
let crdContainer = document.getElementById("crdContainer");
let crdLog = document.getElementById("crdLog");

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

crdLog.innerHTML = getRandomInt();
crdLog.appendChild;
