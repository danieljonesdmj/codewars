// Unicode Total
// Level 8kyu

// You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.
// examples:
// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(string) {
  if (string.length == 0){
    return 0;
  } else {
    let num = 0;
    
    for (let i = 0; i < string.length; i++) {
      num += string.charCodeAt(i);
    }
      return num;
  }
}