import runEngineGame from '../index.js';
import createRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const calculateGcd = (numFirst, numSecond) => {
  let moreNumb = numFirst;
  let lessNumb = numSecond;
  if (moreNumb < lessNumb) {
    moreNumb = numSecond;
    lessNumb = numFirst;
  }
  let remainderOfDivision = moreNumb % lessNumb;
  while (remainderOfDivision !== 0) {
    moreNumb = lessNumb;
    lessNumb = remainderOfDivision;
    remainderOfDivision = moreNumb % lessNumb;
  }
  return lessNumb;
};
const createLogicGameGcd = () => {
  const firstNumberRandom = createRandomNumber(1, 100);
  const secondNumberRandom = createRandomNumber(1, 100);
  const correctAnswer = calculateGcd(
    firstNumberRandom,
    secondNumberRandom
  ).toString();
  const question = `${firstNumberRandom} ${secondNumberRandom}`;
  return { question, correctAnswer };
};

const startGameGcd = () => {
  runEngineGame(createLogicGameGcd, description);
};

export default startGameGcd;
