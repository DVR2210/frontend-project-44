import rendomNamber from './helper.js';   
import userHello from './index.js'; 

const rulesGame = 'What is the result of the expression?'; // вопрос игры 

const arr = ['+', '-', '*']; // массив из операторов

const randomElement = arr[Math.floor(Math.random() * arr.length)]; // полч рендомный элемент 
const firstNamber = rendomNamber(0, 50); // полчаем рендомное первое число
const secondNamber = rendomNamber(0, 50); // получаем рендомное второе число

const calculate = (randomElement, firstNamber, secondNamber) => { // вугкция сложения первого ив торго числа
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

const gameRendom = () => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)]; // полч рендомный элемент 
  const firstNamber = rendomNamber(0, 50); // полчаем рендомное первое число
  const secondNamber = rendomNamber(0, 50); // получаем рендомное второе число

  return [`${firstNamber} ${randomElement} ${secondNamber}`, String(calculate(randomElement, firstNamber, secondNamber))];
  
};

function brainCalc() {
  userHello(rulesGame, gameRendom);
};

export default brainCalc;