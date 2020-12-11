const fs = require('fs');
const input = fs.readFileSync('test1.txt', 'utf-8');
//const input = fs.readFileSync('test2.txt', 'utf-8');
const inputArr = input.split('\n').slice(0, -1);

let sortedInput = inputArr.sort((a, b) => a - b).map((str) => parseInt(str));
sortedInput.unshift(0);
sortedInput.push(sortedInput[sortedInput.length - 1] + 3);

let oneJoltDiff = 0;
let twoJoltDiff = 0;
let threeJoltDiff = 0;
let steps = [];
let result = 1;

for (let i = 0; i < sortedInput.length; i++) {
  let lastNum = i - 1 > -1 ? sortedInput[i - 1] : 0;
  let current = sortedInput[i];
  let diff = current - lastNum;
  if (diff === 1) {
    oneJoltDiff++;
    steps.push(1);
  } else if (diff === 2) {
    twoJoltDiff++;
    steps.push(2);
  } else if (diff === 3) {
    threeJoltDiff++;
    steps.push(3);
  }
}

for (let j = 0; j < steps.length; j++) {
  let current = steps[j];
  if (current === 1) {
    let oneRight = steps[j + 1];
    let twoRight = steps[j + 2];
    if (oneRight) {
      //1, 1, 1
      // if (oneRight === 1 && twoRight === 1) {
      //   result *= 4;
      // }
      //1,1
      if (oneRight === 1) {
        result *= 2;
      }
      //1, 2
      else if (oneRight === 2) {
        result *= 2;
      }
    }
  } else if (current === 2) {
    let oneRight = steps[j + 1];
    //2,1
    if (oneRight === 1) {
      result *= 2;
    }
  }
}

console.log(result);

//let possibleAnswers = [];
//create an array of every version of the sorted arr with ascending nums

// let results = [];
// let temp = [];
// for (let i = 0; i < sortedInput.length; i++) {
//   let current = sortedInput[i];
//   if (temp.length < 1) {
//     if (current < 4) {
//       temp.push(current);
//       continue;
//     }
//   } else {
//     let previous = temp[temp.length - 1];
//     if (current - previous <= 3) {
//       temp.push(current);
//       continue;
//     }
//   }
// }
// if (!results.includes(temp)) results.push(temp);

// let hasOneSteps = true;

//console.log(results);
