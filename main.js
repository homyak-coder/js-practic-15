"use strict";

class First {
  static hello() {
    console.log("Привет, я метод родителя!");
  }
}

class Second extends First {
  hello() {
    First.hello();
    console.log("А я наследуемый метод!");
  }
}

const second = new Second();

second.hello();
