function memoize(fn) {
  let cache = {};

  return function (a) {
    if (a in cache) {
      return "Fetching from cache for " + cache[a];
    }
    else {
      let number = fn(a)
      cache[a] = number;
      return number;
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }


  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log("Calculating result for " + factorial(10));
console.log(factorial(6));
console.log(factorial(5));