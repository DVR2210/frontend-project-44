import rendomNamber from './helper.js';   
import userHello from './index.js'; 

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNum = (n) => {
  if (n===1)  {
    return 'no';
  }
  else if(n === 2)  {
    return 'yes'
  } else   {
    for(var x = 2; x < n; x++)  {
      if(n % x === 0) {
        return 'no';
      }
    }
    return 'yes';  
  }
};

const gameRendom = () => {
  const rendomNum = rendomNamber(0,50);
  const questionGame = `${rendomNum}`;
  const correctAnswer = primeNum(rendomNum);
  return [questionGame, correctAnswer];
};


function brainPrime() {
  userHello(rulesGame, gameRendom);
};

export default brainPrime 
