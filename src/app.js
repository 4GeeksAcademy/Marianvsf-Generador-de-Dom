/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domains = [".com", ".es"];

function generatorDomainList() {
  let result = "";
  for (let pronounItem of pronoun) {
    for (let adjItem of adj) {
      for (let nounItem of noun) {
        for (let domainItem of domains) {
          result += `${pronounItem}${adjItem}${nounItem}${domainItem}</br>`;
        }
      }
    }
  }
  return result;
}

window.onload = function() {
  //write your code here
  console.log(generatorDomainList());
  let Dom = document.getElementById("Dom");
  Dom.innerHTML = generatorDomainList();
};
