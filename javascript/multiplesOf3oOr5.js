// Multiples of 3 or 5
// Level 6kyu

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 

function solution(number){
  var array = [];
  
  for (var i = 0; i < number; i++){
    if (i % 3 == 0 && i % 5 == 0 || i % 3 == 0 || i % 5 == 0) {
      array.push(i);
    }
  }
    
  return array.reduce(function (a, b) {
    return a + b;
  }, 0);
}