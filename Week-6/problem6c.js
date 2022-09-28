/*  Problem 6.3 Sort array of 0's,1's and 2's
    Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder.
    Example 1:Input:N = 5arr[]= {0 2 1 2 0}
    Output:0 0 1 2 2
    Explanation: 0's 1's and 2's are segregated into ascending order.
*/


function sort012(a,arr_size)
{
    
    let lo = 0;
    let hi = arr_size - 1;
    let mid = 0;
    let temp = 0;
    // Iterate till all the elements
    // are sorted
    while (mid <= hi)
    {
        // If the element is 0
        if(a[mid] == 0)
        {
            temp = a[lo];
            a[lo] = a[mid];
            a[mid] = temp;
            lo++;
            mid++;
        }
        // If the element is 1
        else if(a[mid] == 1)
        {
            mid++;
        }
        // If the element is 2
        else
        {
            temp = a[mid];
            a[mid] = a[hi];
            a[hi] = temp;
            hi--;
        }
        
    }
}

/* Utility function to print array arr[] */
function printArray(arr,arr_size)
{
    let i;
    for (i = 0; i < arr_size; i++)
    {
        console.log(arr[i] + " ");
    }
}

let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];

let arr_size = arr.length;
sort012(arr, arr_size);
printArray(arr, arr_size);