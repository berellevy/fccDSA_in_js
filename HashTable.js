const contentDisposition = require("content-disposition");

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
    console.log({
      i,
      letter: string[i],
      charCode: string.charCodeAt(i),
      hash,
      max,
      "%": hash % max
    });
  }
  return hash % max;
};

let hashTable = function () {
  let storage = [];
  let storageLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    let index = hash(key, storageLimit);
  };
};

console.log(hash("Berel is a poo", 4));
