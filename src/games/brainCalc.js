import brainGamesEngine from '../index.js';
import { random } from '../helpers.js';

const doCalc = () => {
  const arryOfOperators = [
    {
      symbol: '*',
      expression: (numFirst, numSecond) => numFirst * numSecond,
    },
    {
      symbol: '+',
      expression: (numFirst, numSecond) => numFirst + numSecond,
    },
    {
      symbol: '-',
      expression: (numFirst, numSecond) => numFirst - numSecond,
    },
  ];
  const rules = 'What is the result of the expression?';
  const randomIndexOperators = random(0, 2);
  const leftOperand = random(1, 100);
  const rightOperand = random(1, 100);
  const expression = `${leftOperand} ${arryOfOperators[randomIndexOperators].symbol} ${rightOperand}`;
  const correctAnswer = arryOfOperators[randomIndexOperators]
    .expression(leftOperand, rightOperand)
    .toString();
  const question = expression;
  const objInfoGame = { rules, question, correctAnswer };
  return objInfoGame;
};

const startGameCalc = () => {
  console.log(brainGamesEngine(doCalc));
};

export default startGameCalc;
