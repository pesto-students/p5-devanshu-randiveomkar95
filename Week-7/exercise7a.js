/* Reverse the Linked list
    Given a linked list of N nodes. The task is to reverse this list.
*/

var head;
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

    function reverse(node) {
    	var prev = null;
    	var current = node;
    	var next = null;
    		while (current != null) {
    			next = current.next;
    			current.next = prev;
    			prev = current;
    			current = next;
    		}
    		node = prev;
    		return node;
	}

	function printList(node) {
		while (node != null) {
			console.log(node.data + " ");
			node = node.next;
		}
	}

    head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head = reverse(head);
    printList(head);