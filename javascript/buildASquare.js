// Build a square
// Level 7kyu

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

function generateShape(int){
  var string = []
  
  for (var i = 0; i < int; i++){
    string.push('+'.repeat(int) + '\n')
  }
  
  return string.join('').slice(0, -1)
}