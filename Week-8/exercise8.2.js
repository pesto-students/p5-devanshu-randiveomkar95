/*
Problem 8.2 : Validate a Binary TreeGiven the root of a binary tree, 
determine if it is a valid binary search tree (BST).A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
Theright subtree of a node contains only nodes with keys greater than the node's key. 
Boththe left and right subtrees must also be binary search trees
*/


class Node
{
    constructor(data)
    {
       this.left = null;
       this.right = null;
       this.data = data;
    }
}
 
let prev;

function isBSTUtil(root)
{
    if (root != null)
    {
        if (!isBSTUtil(root.left))
            return false;

        if (prev != null && root.data <= prev.data)
            return false;

        prev = root;

        return isBSTUtil(root.right);
    }
    return true;
}

function isBST(root)
{
    return isBSTUtil(root);
}
 
let root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);
root.right.left = new Node(3);
root.right.right = new Node(6);

if (isBST(root))
    document.write("Is BST");
else
    document.write("Not a BST");