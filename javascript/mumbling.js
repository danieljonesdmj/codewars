// Mumbling
// Level 8kyu

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  var correctStrings = [];
	var arrayInRightCase = [];
  
  for (var i = 0, j = 1; i < s.length; i++, j++) {
    var array = s.split('');
    var arrayRepeated = array[i].repeat(j);
    correctStrings.push(arrayRepeated);
    arrayInRightCase.push(correctStrings[i][0].toUpperCase() + correctStrings[i].toLowerCase().slice(1));
}
    var result = arrayInRightCase.join('-');
    return result;
}

