function fibonacciIterative(n) {
  let arr = [0,1];

  for (let index = 2; index < n; index++) {
    if ((index - 1) <= 0) {
      arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
  }

  return result
}

fibonacciIterative(5)

function fibonacciRecursion(n) {
  if (n < 2) return n;

  return fibonacciRecursion(n -1) + fibonacciRecursion(n - 2)
}

fibonacciRecursion(8)