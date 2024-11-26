import runEngineGame from '../index.js';
import createRandomNumber from '../helpers.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;
const createLogicGameEven = () => {
  const randomNumber = createRandomNumber(1, 100);
  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return { question: randomNumber, correctAnswer, };
};

const startGameEven = () => {
  runEngineGame(createLogicGameEven, rules);
};

export default startGameEven;
