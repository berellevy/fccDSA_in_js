function Queue() {
  const collection = [];

  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function (element) {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return this.size() === 0;
  };
}

function PriorityQueue() {
  const collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.size(); i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function() {
    return collection.shift()[0]
  }

  this.print = function() {
    console.log(collection);
  }

  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return this.size() === 0;
  };
}

const q = new PriorityQueue();
console.log(q.isEmpty());
q.enqueue(["a", 1]);
q.enqueue(["b", 3]);
q.enqueue(["c", 2]);
q.enqueue(["berel", 2]);
q.enqueue(["dovi", 5]);

q.print();
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
