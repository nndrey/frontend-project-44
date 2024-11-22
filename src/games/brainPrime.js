import { brainGamesEngine } from "../index.js";
import { random, isPrimeNumber } from "../helpers.js";

const doPrime = () => {
  const rules = '"yes" if given number is prime. Otherwise answer "no".';
  const randomNumber = random(1, 100);
  const correctAnswer = isPrimeNumber(randomNumber) ? "yes" : "no";
  const question = randomNumber;
  const objInfoGame = { rules, question, correctAnswer };
  return objInfoGame;
};

const startGamePrime = () => {
  console.log(brainGamesEngine(doPrime));
};

export { startGamePrime };
