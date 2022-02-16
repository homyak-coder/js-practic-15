"use strict";

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
};

DomElement.prototype.addElements = function () {
  let addElem;
  if (this.selector[0] == ".") {
    addElem = document.createElement("div");
    addElem.setAttribute("class", this.selector.slice(1));
    addElem.style.height = this.height;
    addElem.style.width = this.width;
    addElem.style.backgroundColor = this.bg;
    addElem.style.fontSize = this.fontSize;
    addElem.textContent = this.text;
  } else if (this.selector[0] == "#") {
    addElem = document.createElement("p");
    addElem.setAttribute("id", this.selector.slice(1));
    addElem.style.height = this.height;
    addElem.style.width = this.width;
    addElem.style.backgroundColor = this.bg;
    addElem.style.fontSize = this.fontSize;
    addElem.textContent = this.text;
  }
  document.querySelector("body").appendChild(addElem);
};

const newObject = new DomElement(
  ".squaer",
  "100px",
  "100px",
  "red",
  "large",
  "blbalbalbal"
);
newObject.addElements();
