"use strict";
import readlineSync from "readline-sync";
import { brainGamesEngine } from "../src/index.js";
const rules = `What number is missing in the progression?`;

const doProgression = (name) => {
  const progressionStep = Math.ceil(Math.random() * 3) + 1; //формируем рандомьный шаг прогресси от 2 до 4
  const randomPlug = Math.floor(Math.random() * 10); //случайный индекс элемента который будет спрятан
  const plug = ".."; //заглушка для спрятанного числа
  let startNumber = Math.ceil(Math.random() * 50); // случайное число с которого начнется прогрессия

  const arryNumbers = [startNumber]; //создаем массив с первым стартовым числом

  for (let i = 0; i < 9; i += 1) {
    startNumber += progressionStep; //увеличиваем каждое след число на выбранную прогрессию
    arryNumbers.push(startNumber); //наполняем массив еще девятью числами, итого получаем массив с 10 числами
  }
  const correctAnswer = arryNumbers[randomPlug].toString(); //записываем верный ответ
  arryNumbers[randomPlug] = plug; //случайное число из массива прячем заглушкой
  const result = arryNumbers.toString().replace(/,/g, " "); //формируем из нашего массива строку, и разделяем цифры пробелом
  console.log(`Question: ${result}`);
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

const startGameProgression = () => {
  //закидываем правила и логику игры в движок
  console.log(brainGamesEngine(rules, doProgression));
};
export { startGameProgression };
