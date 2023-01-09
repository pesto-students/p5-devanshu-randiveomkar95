/* Rotate the Linked list
Given a singly linked list of size N. 
The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or 
equal to length of the linked list.
*/

var head;
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
    function rotate(k) {
        if (k == 0)
            return;
        var current = head;
        var count = 1;
        while (count < k && current != null) {
            current = current.next;
            count++;
        }
        if (current == null)
            return;
        var kthNode = current;
        while (current.next != null)
            current = current.next;
        current.next = head;
        head = kthNode.next;
        kthNode.next = null;
    }
    function push(new_data) {
       var new_node = new Node(new_data);
            new_node.next = head;
            head = new_node;
    }
 
    function printList() {
        var temp = head;
        while (temp != null) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
     
    // create a list 10->20->30->40->50->60
    for (i = 60; i >= 10; i -= 10)
        push(i);

    console.log("Given list");
    printList();
    rotate(4);

    console.log("Rotated Linked List");
    printList();