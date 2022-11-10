/*
Problem 8.3: Binary Tree Level Order TraversalGiven the root of a binary tree, 
return the level order traversal of its nodes' values. (i.e.,from left to right, level by level).
*/

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function printLevelOrder() {
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
        
        var tempNode = queue.shift();
        document.write(tempNode.data + " ");

        /* Enqueue left child */
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }

        /* Enqueue right child */
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }
}

var root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
console.log("Level order traversal of binary tree is - ");
printLevelOrder();