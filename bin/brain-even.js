#!/usr/bin/env node
"use strict";
import readlineSync from "readline-sync";

const greeting = "Welcome to the Brain Games!";
console.log(greeting);

const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);

const requirement = `Answer "yes" if the number is even, otherwise answer "no".`; //условие игры
console.log(requirement);

for (let i = 0; i < 3; i += 1) {
  //запускаем цикл на 3 игровых круга
  const randomNumber = Math.ceil(Math.random() * 100); //формируем рандомное число
  console.log(`Question: ${randomNumber}`);
  const answerUser = readlineSync.question("Your answer: "); //спрашиваем игрока
  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no"; //записываем истинный ответ

  if (answerUser === correctAnswer) {
    //проверяем ответ игрока с истинным ответом, и выдаем результат!
    console.log("Correct!");
  } else {
    console.log(
      `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
    );
    break;
  }
  console.log("Congratulations, Bill!");
}
