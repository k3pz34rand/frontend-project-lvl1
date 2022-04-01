#!/usr/bin/env node
import readlineSync from 'readline-sync';
import answerCheck, { randomNumb, randomSign, generateQuesion } from '../src/calc.js';
import userName from '../src/cli.js';

console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

let i = true;
let counter = 0;

const checkUser = () => {
  const numb1 = randomNumb();
  const numb2 = randomNumb();
  const sign = randomSign();

  console.log(generateQuesion(numb1, numb2, sign));

  const answer = readlineSync.question('Your answer: ');
  const check = answerCheck(numb1, numb2, sign, answer);
  console.log(check);
  if (check !== 'Correct!') {
    i = false;
    console.log(`Let's try again, ${userName}!`);
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    i = false;
  }
  return check;
};

while (i) {
  counter += 1;
  checkUser();
}
