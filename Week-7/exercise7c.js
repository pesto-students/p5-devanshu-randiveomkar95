/* Detect loop in a linked list
    Given a linked list of N nodes. The task is to check if the linked list has a loop.
    Linkedlist can contain self loop.
*/

var head;
    class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
      function push(new_data) {
        var new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }

    function detectLoop(h) {
        var s = new Set();
        while (h != null) {
            if (s.has(h))
                return true;
            s.add(h);
            h = h.next;
        }
        return false;
    }
    push(20);
    push(4);
    push(15);
    push(10);
    head.next.next.next.next = head;
    console.log(detectLoop(head) ? 'Loop Found' : 'Not Found');
 