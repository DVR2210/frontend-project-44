import rendomNamber from '../helper.js';
import userHello from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';
const getGcd = (firstNamber, secondNamber) => {
  if (secondNamber > firstNamber) return getGcd(secondNamber, firstNamber);
  if (!secondNamber) return firstNamber;
  return getGcd(secondNamber, firstNamber % secondNamber);
  };
const getQuestionAndAnswer = () => {
  const firstNamber = rendomNamber(0, 50);
  const secondNamber = rendomNamber(0, 50);
  const questionGame = `${firstNamber} ${secondNamber}`;
  const correct = getGcd(firstNamber,secondNamber); 
  const correctAnswer = String(correct);
  return [questionGame, correctAnswer];
};
function brainCalc() {
  userHello(rulesGame, getQuestionAndAnswer);
}
export default brainCalc;
