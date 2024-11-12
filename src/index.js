"use strict";
import readlineSync from "readline-sync";

const brainGamesEngine = (rules, task) => {
  // общий движок для всех игр, передаем аггуметами правила и логику нужной игры
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? "); //знакомство и вывод правил игры
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    //три раунда для любой из игр
    // результат проведения игры
    const resultFunction = task(name);
    if (resultFunction !== "Correct!") {
      return resultFunction;
    }
  }
  return `Congratulations, ${name}!`;
};

export { brainGamesEngine };
