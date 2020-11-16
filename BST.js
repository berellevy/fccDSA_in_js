const nlog = (string) => {
  console.log(string);
  console.log();
}

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
      nlog("BEGIN FUNCTION\n==============", {"startingNode Data": startingNode.data, data})
      nlog("check: is startingNode null?");
      if (startingNode === null) {
        nlog("yes! startingNode is null");
        return null;
      } else {
        nlog("no!");
      }
      nlog("check: data === startingNode.data?");
      if (data === startingNode.data) {
        nlog("yes!!! found a match!");
        nlog("check: are both children null?");
        if (startingNode.left === null && startingNode.right === null) {
          nlog("yess!!")
          return null;
        } else {
          nlog('no!');
        }
        nlog("check: is startingNode's left child empty?");
        if (startingNode.left === null) {
          nlog("yes!!");
          return startingNode.right;
        } else {
          nlog("no!");
        }
        if (startingNode.right === null) {
          nlog("startingNode.right === null");
          return startingNode.right;
        }
        let tempNode = startingNode.right;
        nlog("assigned startingNode.right to tempNode var");
        while (tempNode.left !== null) {
          nlog({tempNode, "tempNode.left": tempNode.left});
          tempNode = tempNode.left;
        }
        startingNode.data = tempNode.data;
        startingNode.right = findAndRemoveNode(
          startingNode.right,
          tempNode.data
        );
        nlog("return startingNode");
        return startingNode;
      } else if (data < startingNode.data) {
        startingNode.left = findAndRemoveNode(startingNode.left, data);
        nlog("(data < startingNode.data)");
        return startingNode;
      } else {
        startingNode.right = findAndRemoveNode(startingNode.right, data);
        nlog("(data > startingNode.data)");
        return startingNode;
      }
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
      nlog({Q, result});
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
        nlog({Q, result});
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BST();
// nlog(bst.findMinHeight());

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
bst.remove(4)
