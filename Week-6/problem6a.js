/*
Problem 6.1: 
Max Sum Contiguous SubarrayFind the contiguous subarray within an array, 
A of length N which has the largest sum.
Input Format:The first and the only argument contains an integer array,
A. Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.
*/

function maxSubarraySum(arr)
{
    let max_ending_here = 0, 
        max_so_far = 0;

    for (let i = 0; i < arr.length; i++) {

        // include current element to previous subarray only
        // when it can add to a bigger number than itself.
        if (arr[i] <= max_ending_here + arr[i]) {
            max_ending_here += arr[i];
        }

        // Else start the max subarray from current element
        else {
            max_ending_here = arr[i];
        }
        if (max_ending_here > max_so_far) {
            max_so_far = max_ending_here;
        }
    }
    console.log(max_so_far);
    return max_so_far;
}
let a = [10, -2, 3, 5, 7, -2];
maxSubarraySum(a);