const fs = require('fs');

const input = fs.readFileSync('input.txt');
const inputArr = input
  .toString()
  .split('\n')
  .map((entry) => parseInt(entry));

let hash = {};

inputArr.forEach((num) => {
  let target = 2020 - num;
  if (hash[target]) {
    console.log(target * num);
    return;
  }
  hash[num] = true;
});
