const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array){
  const length = array.length;

  for(let i=0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      const temp = array[j]
      if(temp > array[j+1]) {
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }

  return array
}

bubbleSort(numbers)