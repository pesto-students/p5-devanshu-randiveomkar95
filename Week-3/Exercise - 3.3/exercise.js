/* Exercise 3.3
What is the output of the below problem and why: */

function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();  
increment();
increment();
increment();
log();

//OUTPUT = Count is 0
// Why?
// ANSWER => log function has the lexical scope of count 0 that's why the output is Count is 0;
