"use strict";
import readlineSync from "readline-sync";
import { brainGamesEngine } from "../src/index.js";
const rules = `Find the greatest common divisor of given numbers.`;

const doGcd = (name) => {
  const firstNumberRandom = Math.ceil(Math.random() * 100); //создаем два случайных числа
  const secondNumberRandom = Math.ceil(Math.random() * 100);
  let more = //находим большее
    firstNumberRandom > secondNumberRandom
      ? firstNumberRandom
      : secondNumberRandom;
  let less = //находим меньшее
    secondNumberRandom < firstNumberRandom
      ? secondNumberRandom
      : firstNumberRandom;
  let remainderOfDivision = more % less; //получаем остаток от деления этих чисел

  while (remainderOfDivision !== 0) {
    // с помощью алгоритма Евклида вычисляем НОД
    more = less;
    less = remainderOfDivision;
    remainderOfDivision = more % less;
  }
  let correctAnswer = less;

  console.log(`Question: ${firstNumberRandom} ${secondNumberRandom}`);
  const answerUser = readlineSync.question("Your answer: "); //получаем ответ игрока

  if (answerUser === correctAnswer.toString()) {
    //выводим на экран результат
    const print = "Correct!";
    console.log(print);
    return print;
  } else {
    const print = `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    return print;
  }
};

const startGameGcd = () => {
  //закидываем правила и логику игры в движок
  console.log(brainGamesEngine(rules, doGcd));
};

export { startGameGcd };
