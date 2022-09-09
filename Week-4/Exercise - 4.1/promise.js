/* Exercise 4.1:
Implement a function named getNumber which generates a random number. 
If random Number is divisible by 5 it will reject the promise else it will resolve the promise. 
Let’s also keep the promise resolution/rejection time as a variable.
    1.JS promises should not be used.
    2.A custom promise function should be created.
    3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
    4.Should be able to accept callbacks as props. */

const getNumber = (num) => 
new Promise(function (resolve, reject) {
    const randomNumber = parseInt(Math.random() * 100, 10);
    if(randomNumber % num === 0) {
        reject(new Error("Error Catched!"));
        console.log(`${randomNumber} is rejected`);
    } else {
        resolve();
        console.log(`${randomNumber} is resolved`);   
    }
}).catch();

const number = getNumber(5);
number.catch(err => console.log(err.message));