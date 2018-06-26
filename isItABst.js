'use strict';

const BinarySearchTree = require('./binarySearchTree');

// check if left is smaller than node - if not return false
// if right is not bigger - return false
// 

function isBst(bst){

  if(!bst) return true;

  if(bst.left && bst.left.key > bst.key){
    return false;
  }  
  if(bst.right && bst.right.key < bst.key){
    return false;
  }  
  if(!isBst(bst.left) || !isBst(bst.right)){
    return false;
  }
  return true;
}


let newBinarySearchTree = new BinarySearchTree();

newBinarySearchTree.insert(3, null);
newBinarySearchTree.insert(1, null);
newBinarySearchTree.insert(4, null);
newBinarySearchTree.insert(6, null);
newBinarySearchTree.insert(9, null);
newBinarySearchTree.insert(2, null);
newBinarySearchTree.insert(5, null);
newBinarySearchTree.insert(7, null);

console.log(isBst(newBinarySearchTree));
