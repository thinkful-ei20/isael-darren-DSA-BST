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

function iterateBst(bst, arr) {
  console.log('x');
  if (bst === null) return;
  if (bst.right) iterateBst(bst.right, arr);
  if (arr.length < 3) {
    arr.push(bst.key)
  } else {
    return;
  }

  // console.log(bst.key);
  if (bst.left) iterateBst(bst.left, arr);
}

function test(bst) {
  let arr = [];
  iterateBst(bst, arr);
  return arr[2];
}

console.log(test(newBinarySearchTree));
// iterateBst(newBinarySearchTree)
// console.log(arr);
