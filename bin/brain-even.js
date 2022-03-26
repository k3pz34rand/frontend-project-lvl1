import readlineSync from 'readline-sync';
import userName from '../src/cli.js'

const getRandom = () => Math.ceil(Math.random() * 100);

const checkNumber = (number, answer) => {
    if (number % 2 === 0) {
        if (answer === 'no'){
        return 'Correct!';
        }
        else return `'${answer}' is wrong answer ;(. Correct answer 'no'`;
    }
    if (number % 2 !== 0) {
        if (answer === 'yes') {
        return 'Correct!';
        }
        else return `'${answer}' is wrong answer ;(. Correct answer 'yes'`;
    }
}

let rightAnswer = 0;

console.log(`Hello, ${userName}`);
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

while (rightAnswer < 3) {
    const number = getRandom();
    console.log(`Question: ${number}`)
    const answer = readlineSync.question(`Your answer: `);
    const result = checkNumber(number, answer);
    if (result === 'Correct!') {
        rightAnswer += 1
    } else {
        rightAnswer = 0
        console.log(result);
	console.log(`Let's try again, ${userName}`);
    }
}

console.log(`Congratulations, ${userName}`);
