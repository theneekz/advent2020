const fs = require('fs');

const input = fs.readFileSync('input.txt');
const inputArr = input
  .toString()
  .split('\n')
  .map((entry) => parseInt(entry))
  .sort((a, b) => a - b);

let rIdx = 0;
let lIdx = 199;

while (rIdx < lIdx) {
  let thisSum = inputArr[rIdx] + inputArr[lIdx];
  if (thisSum === 2020) {
    console.log(inputArr[rIdx] * inputArr[lIdx]);
    return;
  } else if (thisSum < 2020) {
    rIdx++;
  } else if (thisSum > 2020) {
    lIdx--;
  }
}
