import readlineSync from 'readline-sync'; 

const gameLevel = 3; 

function userHello(gameMessage, nextlavel) { 

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i heve your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameMessage); 

  for (let raundGame = 0; raundGame < gameLevel; raundGame += 1) { 

  const [questionGame, correctAnswer] = nextlavel(); 
  console.log(`Question: ${questionGame}`); 
  const playerAnswer = readlineSync.question('Your answer: '); 
   
  if (playerAnswer !== correctAnswer) { 
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}\n Lets try again ${name}.`);
    return;  
  }
  
  console.log('Correct!');

}
console.log(`Congratulations, ${name}!`);

};
export default userHello;