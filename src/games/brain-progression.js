import userHello from '../index.js';

const rulesGame = 'What number is missing in the progression?';

const minNum = 1;
const maxNum = 50;

const getRandomNum = (min = minNum, max = maxNum) => Math.floor(Math.random() * (max - min)) + min;
const getRandIndex = (data) => Math.floor(Math.random() * data.length);

const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 50;

const getProgression = (progressionLength, progressionStep, progressionRange) => {
  const arrProgression = [];
  for (let i = progressionRange; arrProgression.length < progressionLength; i += progressionStep) {
    arrProgression.push(i);
  }
  return arrProgression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomNum(minLength, maxLength);
  const progressionStep = getRandomNum(minStep, maxStep);
  const progressionRange = getRandomNum(minRange, maxRange);
  const progression = getProgression(progressionLength, progressionStep, progressionRange);
  const hiddenIndex = getRandIndex(progression);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

function brainProgression() {
  userHello(rulesGame, getQuestionAndAnswer);
}

export default brainProgression;
