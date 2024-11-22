import { brainGamesEngine } from "../index.js";
import { random, doArrayOfProgressions } from "../helpers.js";

const doProgression = () => {
  const rules = "What number is missing in the progression?";
  const progressionStep = random(2, 4);
  const sizeProgression = random(7, 12);
  const startNumber = random(1, 50);
  const arryNumbers = doArrayOfProgressions(
    sizeProgression,
    progressionStep,
    startNumber
  );
  const randomPlug = random(0, sizeProgression - 1);
  const plug = "..";
  const correctAnswer = arryNumbers[randomPlug].toString();
  arryNumbers[randomPlug] = plug;
  const result = arryNumbers.toString().replace(/,/g, " ");
  const question = result;
  const objInfoGame = { rules, question, correctAnswer };
  return objInfoGame;
};

const startGameProgression = () => {
  console.log(brainGamesEngine(doProgression));
};
export { startGameProgression };
