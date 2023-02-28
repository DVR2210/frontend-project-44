import userHello from '../index.js';

const rulesGame = 'What number is missing in the progression?';
const getRandomNum = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
const getProgression = () => {
  let begin = getRandomNum(1, 15);
  const end = getRandomNum(10, 80);
  const step = getRandomNum(3, 10);
  const array = [];
  while (begin <= end) {
    array.push(begin);
    begin += step;
  }
  return array;
};
const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const index = getRandomNum(1, progression.length - 1);
  const rightAnswer = progression[index];
  progression[index] = '..';
  const correctAnswer = String(rightAnswer);
  const question = progression.join(' ');
  return [question, correctAnswer];
};
function brainProgression() {
  userHello(rulesGame, getQuestionAndAnswer);
}
export default brainProgression;
