import rendomNamber from './helper.js';   
import userHello from './index.js'; 

const rulesGame = 'Find the greatest common divisor of given numbers.'; // правило игры 

const getGcd = (firstNamber, secondNamber) => { // функция возвращает наибольший делитель - рабоатет 
  if (secondNamber > firstNamber) return getGcd(secondNamber, firstNamber);
  if (!secondNamber) return firstNamber;
  return getGcd(secondNamber, firstNamber % secondNamber);
  };

const gameRendom = () => {

  const firstNamber = rendomNamber(0, 50); 
  const secondNamber = rendomNamber(0, 50);
  const questionGame = `${firstNamber} ${secondNamber}`; 
  const correct = getGcd(firstNamber,secondNamber);
  const correctAnswer = String(correct);
    
  return [questionGame, correctAnswer]; 
};

function brainCalc() {
  userHello(rulesGame, gameRendom);
};

export default brainCalc; 


