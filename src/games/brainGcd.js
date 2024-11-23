import brainGamesEngine from '../index.js';
import { random, calculateGcd } from '../helpers.js';

const doGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const firstNumberRandom = random(1, 100);
  const secondNumberRandom = random(1, 100);
  const correctAnswer = calculateGcd(
    firstNumberRandom,
    secondNumberRandom,
  ).toString();
  const question = `${firstNumberRandom} ${secondNumberRandom}`;
  const objInfoGame = { rules, question, correctAnswer };
  return objInfoGame;
};

const startGameGcd = () => {
  console.log(brainGamesEngine(doGcd));
};

export default startGameGcd;
