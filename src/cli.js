import readlineSync from 'readline-sync';



export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i heve your name?');
  console.log(`Hello, ${name}!`);

};
