"use strict";
import readlineSync from "readline-sync";

const brainGamesEngine = (game) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(game().rules);
  const quantityOfRounds = 3;

  for (let i = 0; i < quantityOfRounds; i += 1) {
    const resultGame = game();
    console.log(`Question: ${resultGame.question}`);
    const answerUser = readlineSync.question("Your answer: ");

    if (resultGame.correctAnswer === answerUser) {
      const print = "Correct!";
      console.log(print);
    } else {
      const print = `'${answerUser}' is wrong answer ;(. Correct answer was '${resultGame.correctAnswer}'.\nLet's try again, ${name}!`;
      return print;
    }
  }
  return `Congratulations, ${name}!`;
};
export { brainGamesEngine };
