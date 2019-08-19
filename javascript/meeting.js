// Meeting
// Level 6kyu

// John has invited some friends. His list is:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that makes this string uppercase and gives it sorted in alphabetical order by last name.

// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
// So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

const meeting = s => {
  let CapitalizedNames = s.toUpperCase().split(";");
  let sortedNames = [];
  let result = [];

  for (let i = 0; i < CapitalizedNames.length; i++) {
    sortedNames.push(
      CapitalizedNames[i]
        .split(":")
        .reverse()
        .join(", ")
    );
  }

  for (let j = 0; j < sortedNames.length; j++) {
    result.push(`(${sortedNames.sort()[j]})`);
  }

  return result.join("");
};
