import rendomNamber from './helper.js';   
import userHello from './index.js'; 

const rulesGame = 'Find the greatest common divisor of given numbers.'; // правило игры 

const getGcd = (firstNamber, secondNamber) => { // функция возвращает наибольший делитель от двух чисел-работает проверил 
  if (secondNamber > firstNamber) return getGcd (secondNamber, firstNamber);
  if (!secondNamber) return firstNamber;
  return getGcd (secondNamber, firstNamber % secondNamber);
  };



const gameRendom = () => {
  
  const firstNamber = rendomNamber(0, 50);  // получ первое число
  const secondNamber = rendomNamber(0, 50); // получ второе число
  const questionGame = `${firstNamber} ${secondNamber}`; 
  const correct = getGcd(firstNamber,secondNamber);
  const correctAnswer = String(correct);
  
  return [questionGame, correctAnswer]; 
};

function brainCalc() {
  userHello(rulesGame, gameRendom);
};

export default brainCalc; 


