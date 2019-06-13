// Double Char
// Level 8kyu

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// doubleChar("String") ==> "SSttrriinngg"
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
  arr = []
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i], str[i]);
  }
  return arr.join('');
}
