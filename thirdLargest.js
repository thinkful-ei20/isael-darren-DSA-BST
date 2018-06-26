'use strict';

const BinarySearchTree = require('./binarySearchTree');

let newBinarySearchTree = new BinarySearchTree();

//create left counter and right counter varaible 
//we go left and check if there is a right, a left or both
//if there is a this.right go one level down
//if there is a this.left go one level down
//if there is both left and right go one level down
// 

newBinarySearchTree.insert(3, null);
newBinarySearchTree.insert(1, null);
newBinarySearchTree.insert(4, null);
newBinarySearchTree.insert(6, null);
newBinarySearchTree.insert(9, null);
newBinarySearchTree.insert(2, null);
newBinarySearchTree.insert(5, null);
newBinarySearchTree.insert(7, null);
let arr = [];
function iterateBst(bst) {
  // count++;
  if (bst === null) return;
  if (bst.right) iterateBst(bst.right);
  // console.log('count',count)
  arr.push(bst.key)
  console.log(bst.key);
  if (bst.left) iterateBst(bst.left);
}


iterateBst(newBinarySearchTree)