/* Exercise 3.1:
    Create a memoize function that remembers previous inputs and stores them in cache so that 
    itwon’t have to compute the same inputs more than once. 
    The function will take an unspecifiednumber of integer inputs and a reducer method. */


function memoize(fn) {
    const cache = new Map();
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  const memoizedSum = memoize(sum);

  console.time();
  console.log(memoizedSum(10, 10));  //1st result not cached
  console.timeEnd();

  console.time();
  console.log(memoizedSum(10, 10)); // same result cached
  console.timeEnd();