/* Exercise 3.4
    Refactor the above stack implementation, using the concept of closure,
    such that there is noway to access items array outside of createStack() function scope: */

function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items;
stack.items=[10,100,1000]; //Encapsulation Broken


