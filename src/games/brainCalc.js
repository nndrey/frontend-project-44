import runEngineGame from '../index.js';
import createRandomNumber from '../helpers.js';

const rules = 'What is the result of the expression?';
const countExpression = (numFirst, numSecond, operator) => {
  switch (operator) {
    case '+':
      return numFirst + numSecond;
    case '-':
      return numFirst - numSecond;
    case '*':
      return numFirst * numSecond;
    default:
      return `unknown operation: ${operator}`;
  }
};
const createLogicGameCalk = () => {
  const arryOfOperators = ['*', '+', '-'];
  const randomOperator = arryOfOperators[createRandomNumber(0, 2)];
  const leftOperand = createRandomNumber(1, 100);
  const rightOperand = createRandomNumber(1, 100);
  const expression = `${leftOperand} ${randomOperator} ${rightOperand}`;
  const correctAnswer = countExpression(
    leftOperand,
    rightOperand,
    randomOperator,
  ).toString();
  return { question: expression, correctAnswer, };
};

const startGameCalc = () => {
  runEngineGame(createLogicGameCalk, rules);
};

export default startGameCalc;
