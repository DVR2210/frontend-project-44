 import rendomNamber from './helper.js';   
 import userHello from './index.js'; 
 
 const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".'; // ПравелаИгры

 const examinationNamber = (namber) => namber % 2 === 0; // првоерка четности числа 
 

  const gameRendom = () => {

  const questionGame = rendomNamber(1, 10); // созд.перменнйо с ипортируемой функцией 
  
  const possibleAnswer = examinationNamber(questionGame) ? 'yas' : 'no'; // сзд.перменню с варантами ответов
  
  return [questionGame, possibleAnswer]; // возврат двух перменных
 };



 function brainEvent() { // созд. новую функцию БрейнЕвенст с пердаем в нее функцию ЮсерХеллоу с двумя аргументами
  userHello(rulesGame, gameRendom);
 }; 


 export default brainEvent; // эекспорт текущей функции текущего файла