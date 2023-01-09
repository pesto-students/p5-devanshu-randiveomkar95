/* Exercise5.1:
    Create 3 functions, for example doTask1(), doTask2() and doTask3(). 
    These three functions should be executed sequentially using both Async and Await.
    Execute these three 3 callback functions asynchronously using Async Await and Generators. */

async function dotask1(){
    const task1 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Task 1 Resolved!");},1000);
    });
    let result = await task1;
    return result;
}

async function dotask2(){
    const task2 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Task 2 Resolved!");},1000);
    });
    let result = await task2;
    return result;
}

async function dotask3(){
    const task3 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Task 3 Resolved!");},1000);
    });
    let result = await task3;
    return result;
}

//generator function
function * generatorFun(){
    yield dotask1().then((task) =>{ console.log(task); });
    yield dotask2().then((task) =>{ console.log(task); });;
    yield dotask3().then((task) =>{ console.log(task); });;
}
const toDoTask = generatorFun();
toDoTask.next();
toDoTask.next();
toDoTask.next();