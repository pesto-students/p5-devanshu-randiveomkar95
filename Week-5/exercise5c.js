/* Exercise 5.3
    Write a function called hasDuplicate which accepts an array and returns true or false
    if that array contains a duplicate */
    const hasDuplicate = function (arr){
        let setArray = new Set(arr);
        console.log((setArray.size != arr.length) ? false : true);
    }
    let a = [1,2,3,6,1];
    hasDuplicate(a);