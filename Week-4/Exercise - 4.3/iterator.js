/* Exercise4.3:
    Implement Fibonacci Series with Iterators 
    Sample output
    The Fibonacci Series is:
    0
    1
    1
    2
    3
    5
    8 */

function Fibonacci(num) {
    var initial = 0;
    var current = 1;
    var next = 0;

    for(let i = 0; i < num; i++){
        console.log(next);
        initial = current + next;
        current = next;
        next = initial;
    }
}
Fibonacci(7);