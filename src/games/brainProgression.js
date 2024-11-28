import runEngineGame from '../index.js';
import createRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';
const progression = (size, step, startNum) => {
  const result = [startNum];
  let start = startNum;
  for (let i = 0; i < size - 1; i += 1) {
    start += step;
    result.push(start);
  }
  return result;
};
const createLogicGameProgression = () => {
  const progressionStep = createRandomNumber(2, 4);
  const sizeProgression = createRandomNumber(7, 12);
  const startNumber = createRandomNumber(1, 50);
  const randomProgression = progression(
    sizeProgression,
    progressionStep,
    startNumber,
  );
  const plug = '..';
  const hiddenIndex = createRandomNumber(0, randomProgression.length - 1);
  const correctAnswer = randomProgression[hiddenIndex].toString();
  randomProgression[hiddenIndex] = plug;
  const result = randomProgression.join(' ');
  return { question: result, correctAnswer };
};

const startGameProgression = () => {
  runEngineGame(createLogicGameProgression, description);
};
export default startGameProgression;
