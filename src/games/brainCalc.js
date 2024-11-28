import runEngineGame from '../index.js';
import createRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return `unknown operation: ${operator}`;
  }
};
const createLogicGameCalk = () => {
  const operators = ['*', '+', '-'];
  const randomOperator = operators[createRandomNumber(0, 2)];
  const number1 = createRandomNumber(1, 100);
  const number2 = createRandomNumber(1, 100);
  const expression = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = calculate(number1, number2, randomOperator).toString();
  return { question: expression, correctAnswer };
};

const startGameCalc = () => {
  runEngineGame(createLogicGameCalk, description);
};

export default startGameCalc;
