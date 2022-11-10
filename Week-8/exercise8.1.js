/*
Problem 8.1: Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from theroot node down to the farthest leaf node.
Example 1:Input: root = [3,9,20,null,null,15,7]
Output: 3

*/
class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}
    let root;
    function maxDepth(node)
    {
        if (node == null)
            return 0;
        else
        {
            let lDepth = maxDepth(node.left);
            let rDepth = maxDepth(node.right);
   
            if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }
     
        root = new Node(3);
        root.left = new Node(9);
        root.right = new Node(20);
        root.right.left = new Node(15);
        root.right.right = new Node(7);
   
        console.log("Depth of tree is : " + maxDepth(root));