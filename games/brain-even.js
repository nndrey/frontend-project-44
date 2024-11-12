"use strict";
import readlineSync from "readline-sync";
import { brainGamesEngine } from "../src/index.js";

const rules = `Answer "yes" if the number is even, otherwise answer "no".`;

const taskEven = (name) => {
  const randomNumber = Math.ceil(Math.random() * 100); //формируем рандомное число
  console.log(`Question: ${randomNumber}`);
  const answerUser = readlineSync.question("Your answer: "); //спрашиваем игрока
  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no"; //записываем истинный ответ

  if (answerUser === correctAnswer) {
    //проверяем ответ игрока с истинным ответом, и печатаем результат!
    const print = "Correct!";
    console.log(print);
    return print;
  } else {
    const print = `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    return print;
  }
};

const startGameEven = () => {
  //закидываем правила и логику игры в движок
  console.log(brainGamesEngine(rules, taskEven));
};

export { startGameEven };
