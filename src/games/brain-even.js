import rendomNamber from '../helper.js';
import userHello from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (namber) => namber % 2 === 0;
const getQuestionAndAnswer = () => {
 const questionGame = rendomNamber(2, 100);

 const correctAnswer = isEven(questionGame) ? 'yes' : 'no';

 return [questionGame, correctAnswer];

};

function brainEvent() {
 userHello(rulesGame, getQuestionAndAnswer);
}

export default brainEvent;
