function findFactorialRecursive(number) {
  if (number === 2) return 2

  return number * findFactorialRecursive(number - 1)
}

findFactorialRecursive(5)

function findFactorialIterative(number) {
  let answer = 1;

  if (number === 2) return 2;

  for (let i = 2; i <= number; i++)
    answer = answer * i

  return answer
}

findFactorialIterative(5)

function factorialRecursiveTailOptimization(n, acc = 1) {
  if (n === 0) return acc

  return factorialRecursiveTailOptimization(n - 1, n * acc)
}

findFactorialIterative(50)