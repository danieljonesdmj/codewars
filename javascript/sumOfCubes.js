// Sum of cubes
// Level 7kyu

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
// Assume that the input n will always be a positive integer.

const sumCubes = n => {
  let array = [];

  for (let i = 1; i < n + 1; i++) {
    let cubed = i * i * i;
    array.push(cubed);
  }

  let answer = array.reduce((acc, cv) => acc + cv, 0);
  return answer;
};
