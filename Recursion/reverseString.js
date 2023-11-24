const stringTest = 'ola';

function reverseStringIterative(string) {
  const result = []
  for(let i = string.length - 1; i > -1; i--) {
    result.push(string[i]);
  }

  return result.join('');
}

function reverseStringRecursive(string) {
  const result = [];
  for(let i = string.length - 1; i > -1; i--) {
    result.push(string[i]);
  }

  return result.join('');
}


// console.log(reverseStringIterative(stringTest));
console.log(reverseStringRecursive(stringTest));
