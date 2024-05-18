/*1-  Write a function that takes an array of numbers and returns a new array containing only the
even numbers.*/

function NoEven(arry) {
  let FilteredArry = arry.filter(function (n) {
    return n % 2 !== 0;
  });
  return FilteredArry;
}

//2-  Create an object representing a person with properties such as name, age, and email.

let Person = {
  name: "Lupin",
  age: 117,
  email: "arsenelupin1@gmail.com",
};

/*Write a function that takes an array of these objects and returns a new array containing only the 
people who are over 30 years old.*/

function Over30(arry) {
  let FilteredArry = arry.filter(function (person) {
    return person.age >= 30;
  });
  return FilteredArry;
}

//3-  Implement a stack data structure in JavaScript using an array.

class Stack {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return console.log("The Stack is empty!");
    } else {
      return this.elem.pop();
    }
  }
  push(elem) {
    return this.items.push(elem);
  }
  peek() {
    if (this.items.isEmpty()) {
      return console.log("The Stack is empty!");
    } else {
      return this.items[this.items.length - 1];
    }
  }
}

//4-  Implement a queue data structure in JavaScript using an array.*

class Queue {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return console.log("The Queue is empry!");
    } else {
      return this.elem.pop();
    }
  }
  push(elem) {
    return this.items.push(elem);
  }
  peek() {
    if (this.items.isEmpty()) {
      return console.log("The Queue is empty!");
    } else {
      return this.items[this.items.length - 1];
    }
  }
}

//5-  Write a function that takes a string as input and returns a new string with all the vowels removed.

function noVowels(string) {
  let stringArray = string.split("");
  let FilteredArray = stringArray.filter(function (letter) {
    return !(
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u" ||
      letter == "y" ||
      letter == "A" ||
      letter == "E" ||
      letter == "I" ||
      letter == "O" ||
      letter == "U" ||
      letter == "Y"
    );
  });
  let FilteredString = FilteredArray.join("");
  return FilteredString;
}

/*6-  Given two arrays of numbers, write a function that returns a new array containing the unique elements
from both arrays.*/

function uniq(arry1,arry2){
    let arry =[];
    for(let value of arry1){
        if(!arry2.includes(value)){
            arry.push(value)
        }
    }
    for(let value of arry2){
        if(!arry1.includes(value)){
            arry.push(value)
        }
    }
    return arry;
}