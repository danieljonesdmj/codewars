// Removing Elements
// Level 8kyu

// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

function removeEveryOther(arr){
  for (let i = 1; i < arr.length; i++){
    arr.splice(i,1);
  }
    return arr;
}
