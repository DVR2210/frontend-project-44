import rendomNamber from '../helper.js';   
import userHello from '../index.js'; 

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const rendomNum = rendomNamber(0,50);
  const questionGame = `${rendomNum}`;
  const correctAnswer = isPrime(rendomNum) ? 'yes' : 'no';
  return [questionGame, correctAnswer];
};


function brainPrime() {
  userHello(rulesGame, getQuestionAndAnswer);
};

export default brainPrime 
