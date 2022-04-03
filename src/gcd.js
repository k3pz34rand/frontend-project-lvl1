import readlineSync from 'readline-sync';
import userName from './cli.js';

export const randomNumb = () => Math.ceil(Math.random() * 100);

export const getDivider = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  for (let divider = min; ; divider -= 1) {
    if (max % divider === 0) {
      if (min % divider === 0) {
        return divider;
      }
    }
  }
};

const check = () => {
  for (let i = 0; i < 3; i += 1) {
    const numb1 = randomNumb();
    const numb2 = randomNumb();
    console.log(`Question: ${numb1} ${numb2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer == getDivider(numb1, numb2)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getDivider(numb1, numb2)}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default check;
