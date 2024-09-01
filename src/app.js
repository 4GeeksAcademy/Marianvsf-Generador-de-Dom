/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domains = [".com", ".es"];

function generatorDom() {
  let random = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        for (let c = 0; c < domains.length; c++) {
          random += pronoun[i] + adj[a] + noun[b] + domains[c] + "</br>";
        }
      }
    }
  }
  return random;
}

window.onload = function() {
  //write your code here
  console.log(generatorDom());
  let Dom = document.getElementById("Dom");
  Dom.innerHTML = generatorDom();
};
