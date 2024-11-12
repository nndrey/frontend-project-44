"use strict";
import readlineSync from "readline-sync";
import { brainGamesEngine } from "../src/index.js";
const rules = `What is the result of the expression?`;

const taskCalc = (name) => {
  //формируем рандомное вырожение
  const arryOfOperators = ["*", "+", "-"];
  const randomIndexOperators = Math.floor(Math.random() * 3);
  const leftOperand = Math.ceil(Math.random() * 100);
  const rightOperand = Math.ceil(Math.random() * 100);
  const expression = `${leftOperand} ${arryOfOperators[randomIndexOperators]} ${rightOperand}`;
  const correctAnswer = eval(expression).toString(); //получаем верный ответ

  console.log(`Question: ${expression}`);
  const answerUser = readlineSync.question("Your answer: "); //получаем ответ игрока

  if (answerUser === correctAnswer) {
    //сравниваем ответ игрока с верным и возвращаем рузультат
    const print = "Correct!";
    console.log(print);
    return print;
  } else {
    const print = `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    return print;
  }
};

const startGameCalc = () => {
  //закидываем правила и логику игры в движок
  console.log(brainGamesEngine(rules, taskCalc));
};

export { startGameCalc };
