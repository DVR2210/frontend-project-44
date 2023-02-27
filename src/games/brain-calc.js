import rendomNamber from '../helper.js';
import userHello from '../index.js';

const rulesGame = 'What is the result of the expression?';
const arr = ['+', '-', '*'];

const calculate = (randomElement, firstNamber, secondNamber) => {
  switch (randomElement) {
    case '+':
      return firstNamber + secondNamber;
    case '-':
      return firstNamber - secondNamber;
    case '*':
      return firstNamber * secondNamber;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  const firstNamber = rendomNamber(0, 50);
  const secondNamber = rendomNamber(0, 50);
  return [`${firstNamber} ${randomElement} ${secondNamber}`, String(calculate(randomElement, firstNamber, secondNamber))];
};

function brainCalc() {
  userHello(rulesGame, getQuestionAndAnswer);
}

export default brainCalc;
