const BinarySearchTree = require('./binarySearchTree');

let newBinarySearchTree = new BinarySearchTree();

//create left counter and right counter varaible 
//we go left and check if there is a right, a left or both
//if there is a this.right go one level down
//if there is a this.left go one level down
//if there is both left and right go one level down
// 

newBinarySearchTree.insert(3,null);
newBinarySearchTree.insert(5,null);
newBinarySearchTree.insert(6,null);
newBinarySearchTree.insert(7,null);
newBinarySearchTree.insert(10,null);
newBinarySearchTree.insert(2,null);
newBinarySearchTree.insert(1,null);
newBinarySearchTree.insert(0,null);
newBinarySearchTree.insert(15,null);

function heighOfBst(bst){
  
}


if (!bst.left && !bst.right) {
  return 1;
}
if (bst.left && !bst.right) {
  return 1 + placeholder(bst.left);
} else if (bst.right && !bst.left) {
  return 1 + placeholder(bst.right);
} else {
    placeholder(bst.right);
    placeholder(bst.left)
}