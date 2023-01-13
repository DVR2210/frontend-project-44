import rendomNamber from './helper.js';   
import userHello from './index.js'; 

const rulesGame = 'Find the greatest common divisor of given numbers.'; // правило игры 

const firstNamber = rendomNamber(0, 50);  // получ первое число
const secondNamber = rendomNamber(0, 50); // получ второе число


function NOD (firstNamber, secondNamber) { // функция считает наибольший делитель 
	if (secondNamber > firstNamber) return NOD(secondNamber, firstNamber);
	if (!secondNamber) return firstNamber;
	return NOD(secondNamber, firstNamber % secondNamber);
};

