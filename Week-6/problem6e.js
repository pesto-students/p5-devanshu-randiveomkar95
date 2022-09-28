/*
Problem 6.5: Pair With Given DifferenceGiven an one-dimensional unsorted array A 
containing N integers.You are also given aninteger B, 
find if there exists a pair of elements in the array whose difference is B.
Return1 if any such pair exists else return 0. 
Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
Input Format First argument is an integer array A of size N.
 Second argument is aninteger B.Output Format Return 1 if any such pair exists else return 0.
*/

function findPair(arr, size, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            console.log("Pair Found: (" + arr[i] + ", " +
            arr[j] + ")");
            return true;
        }
        else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }

    console.log("No such pair");
    return false;
}
let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 60;
findPair(arr, size, n);