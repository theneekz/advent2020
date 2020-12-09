const fs = require('fs');
// const input = fs.readFileSync('test.txt', 'utf-8');
const input = fs.readFileSync('input.txt', 'utf-8');
const inputArr = input.split('\n').slice(0, -1);
let hash = {};
let arr = [];
let start = -1;
let end = 23;
let result;
do {
  start++;
  end++;
  arr = [];
  hash = {};
  for (let i = start; i < end; i++) {
    let current = parseInt(inputArr[i]);
    arr.push(current);
    for (let j = i + 1; j < end + 1; j++) {
      let next = parseInt(inputArr[j]);
      hash[current + next] = true;
    }
  }

  result = !hash.hasOwnProperty(inputArr[end + 1]);
} while (result === false && end < inputArr.length - 1);

console.log(inputArr[end + 1]);
