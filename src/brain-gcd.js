import rendomNamber from './helper.js';   
import userHello from './index.js'; 

const rulesGame = 'Find the greatest common divisor of given numbers.'; // правило игры 


const gameRendom = () => {
  
  const firstNamber = rendomNamber(0, 50);  // получ первое число
  const secondNamber = rendomNamber(0, 50); // получ второе число

  const questionGame = `${firstNamber} ${secondNamber}`; 

  const correctAnswer = (firstNamber, secondNamber) => {
  if (secondNamber > firstNamber) return NOD(secondNamber, firstNamber);
  if (!secondNamber) return firstNamber;
  return correctAnswer (secondNamber, firstNamber % secondNamber);
  };
  return [questionGame, correctAnswer]; 
};

function brainCalc() {
  userHello(rulesGame, gameRendom);
};

export default brainCalc; 


