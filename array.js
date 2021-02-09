"use strict";

window.addEventListener("DOMContentLoaded", loopArray);
const array = [];
let counter = 0;

function loopArray() {
  array.splice(8);
  counter++;

  array.unshift(counter);
  //console.log(result);
  console.log(array);

  setTimeout(loopArray, 500);
}
