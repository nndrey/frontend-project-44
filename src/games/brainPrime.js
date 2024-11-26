import runEngineGame from '../index.js';
import createRandomNumber from '../helpers.js';
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createLogicGamePrime = () => {
  const randomNumber = createRandomNumber(1, 100);
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  return { question: randomNumber, correctAnswer };
};

const startGamePrime = () => {
  runEngineGame(createLogicGamePrime, rules);
};

export default startGamePrime;
