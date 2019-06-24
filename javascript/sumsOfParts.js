// Sums of Parts
// Level 6 kyu

// Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]
// Its following parts:
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// This works but codewars didn't accept it as it is not efficient enough.
const partsSums = (ls) => {
  let result = [];
  
  for (let i = ls.length; i >= 0; i--) {
    let sum = ls.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    result.push(sum);
    ls.shift();
  } 
  return result;
}

// Accepted by codewars
const partsSums = (ls) => {
  let result = [0];
  ls.reverse().forEach(num => result.push(result[result.length-1] + num));
  return result.reverse();
}