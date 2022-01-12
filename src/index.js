import _ from "lodash";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const btn1 = document.createElement("button");

  element.innerHTML = _.join(["Hello ", "webpack"], "");

  btn.innerHTML = "nihao see console!";
  btn.onclick = printMe;

  btn1.innerHTML = "second one ~~~";
  element.appendChild(btn);
  element.appendChild(btn1);

  return element;
}

document.body.appendChild(component());
