const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.node = new Node(null);
  }
  root() {
    return this.node.data ? this.node : null;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  add(data) {
    this.node.data === null
      ? (this.node = new Node(data))
      : addWithin(this.node);

    function addWithin(node) {
      if (!node) {
        return new Node(data);
      } else if (data < node.data) {
        if (node.left) {
          addWithin(node.left);
        } else {
          node.left = addWithin(node.left);
        }
      } else if (data > node.data) {
        if (node.right) {
          addWithin(node.right);
        } else {
          node.right = addWithin(node.right);
        }
      } else if (data === node.data) {
        return;
      }
    }

    // this.data= addNewNode(this.data, value)
    // function addNewNode(parentNode, value){
    // }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has(data) {
    let current = this.node;
    while (current) {
      if (current.data === data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(data) {
    let current = this.node;
    while (data !== current.data) {
      data < current.data
        ? (current = current.left)
        : (current = current.right);

      if (current === null) return null;
    }
    return current;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(data) {
    this.node = removeNode(this.node, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let rightMin = node.right;
        while (rightMin.left) {
          rightMin = rightMin.left;
        }
        node.data = rightMin.data;
        node.right = removeNode(node.right, rightMin.data);
        return node;
      }
    }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let current = this.node;
    while (current.left) current = current.left;
    return current.data;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    let current = this.node;
    while (current.right) current = current.right;
    return current.data;

    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
