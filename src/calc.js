export const randomNumb = () => Math.ceil(Math.random() * 100);

export const randomSign = () => Math.ceil(Math.random() * 3);

export const generateQuesion = (numb1, numb2, sign) => {
  if (sign === 1) {
    return `Question: ${numb1} + ${numb2}`;
  }
  if (sign === 2) {
    return `Question: ${numb1} - ${numb2}`;
  }
  return `Question: ${numb1} * ${numb2}`;
};

export const checkAnswer = (numb1, numb2, sign, answer) => {
  if (sign === 1) {
    if (answer == numb1 + numb2) {
      return 'Correct!';
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${numb1 + numb2}'.`;
  }
  if (sign === 2) {
    if (answer == numb1 - numb2) {
      return 'Correct!';
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${numb1 - numb2}'.`;
  }
  if (sign === 3) {
    if (answer == numb1 * numb2) {
      return 'Correct!';
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${numb1 * numb2}'.`;
  }
  return 'error checkAnswer function';
};

export default checkAnswer;
