class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.right;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const findAndRemoveNode = function (startingNode, data) {
      console.log("begin func", {startingNode, data})
      if (startingNode === null) {
        return null;
      }
      if (data === startingNode.data) {
        if (startingNode.left === null && startingNode.right === null) {
          return null;
        }
        if (startingNode.left === null) {
          return startingNode.right;
        }
        if (startingNode.right === null) {
          return startingNode.right;
        }
        let tempNode = startingNode.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        startingNode.data = tempNode.data;
        startingNode.right = findAndRemoveNode(
          startingNode.right,
          tempNode.data
        );
        return startingNode;
      } else if (data < startingNode.data) {
        startingNode.left = findAndRemoveNode(startingNode.left, data);
        return startingNode;
      } else {
        startingNode.right = findAndRemoveNode(startingNode.right, data);
        return startingNode;
      }
      console.log("finishing func" {startingNode, data})
    };
    this.root = findAndRemoveNode(this.root, data);
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root) {
    if (node === null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    return Math.min(left, right) + 1;
  }

  findMaxHeight(node = this.root) {
    if (node === null) return -1;
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    return Math.max(left, right) + 1;
  }

  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        result.push(node.data);
        node.left && traverseInOrder(node.left);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        node.right && traverseInOrder(node.right);
        result.push(node.data);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      console.log({Q, result});
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
        console.log({Q, result});
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BST();
// console.log(bst.findMinHeight());

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.add(100);
bst.add(75);
bst.add(600);
bst.remove(7)
