import { brainGamesEngine } from '../index.js';
import { isEvenNumber, random } from '../helpers.js';

const doEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = random(1, 100);
  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  const objInfoGame = { rules, question, correctAnswer };
  return objInfoGame;
};

const startGameEven = () => {
  console.log(brainGamesEngine(doEven));
};

export { startGameEven };
