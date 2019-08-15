// String Transformer
// Level 6kyu

// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

const stringTransformer = str => {
  let splitString = str.split("");
  let result = [];

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] == splitString[i].toUpperCase()) {
      result.push(splitString[i].toLowerCase());
    } else if (splitString[i] == splitString[i].toLowerCase()) {
      result.push(splitString[i].toUpperCase());
    }
  }
  let answer = result
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  return answer;
};
