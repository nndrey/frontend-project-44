"use strict";
import readlineSync from "readline-sync";
import { brainGamesEngine } from "../src/index.js";
const rules = `"yes" if given number is prime. Otherwise answer "no".`;

const doPrime = (name) => {
  const randomNumber = Math.ceil(Math.random() * 100); //выбираем рандомное число для задания
  let correctAnswer = "yes"; // правильный ответ по умолчанию

  for (let i = 2; i < randomNumber; i += 1) {
    //выполняем проверку на простое число
    if (randomNumber % i === 0) {
      correctAnswer = "no";
      break;
    } else {
      correctAnswer = "yes";
    }
  }
  correctAnswer = randomNumber === 1 ? "no" : correctAnswer; // доп провека на единицу и двойку
  console.log(`Question: ${randomNumber}`);
  const answerUser = readlineSync.question("Your answer: "); //получаем ответ игрока

  if (answerUser === correctAnswer) {
    // сравниваем ответы и выводим результат
    //выводим на экран результат
    const print = "Correct!";
    console.log(print);
    return print;
  } else {
    const print = `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    return print;
  }
};

const startGamePrime = () => {
  //закидываем правила и логику игры в движок
  console.log(brainGamesEngine(rules, doPrime));
};

export { startGamePrime };
