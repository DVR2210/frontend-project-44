import readlineSync from 'readline-sync'; // импорт из библиотеки - модуль помгает выводить сообщения

const gameLevel = 3; // колл этераций игры


function userHello(gameMessage, nextlavel) { // gameMessage (questionGame из функций) nextlavel - арг нов уровня 

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i heve your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameMessage); // перадем из функций коснту questionGame

  for (let raundGame = 0; raundGame < gameLevel; raundGame += 1) { // счечки этераций до 3 

  const [questionGame, possibleAnswer] = nextlavel(); // передаем 2 арг questionGame и possibleAnswer из файл BrEvCo
  console.log(`Question: ${questionGame}`); // игра задет вопрос
  const playerAnswer = readlineSync.question('Your answer: '); // ответ игрока обрабатывается readlineSync
   
  if (playerAnswer !== possibleAnswer) { // епроверка ксли ответ не верный
    console.log(`${name} is wrong answer!\n Lets try again.`);
    return;  
  }
  
  console.log('Correct!');

}
console.log(`Congratulations, ${name}!`);

};
export default userHello;