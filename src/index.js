import readlineSync from 'readline-sync';

const runEngineGame = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const resultGame = game();
    console.log(`Question: ${resultGame.question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (resultGame.correctAnswer !== answerUser) {
      return console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${resultGame.correctAnswer}'.\nLet's try again, ${name}!`
      );
    }
    console.log('Correct!');
  };
  return console.log(`Congratulations, ${name}!`);
};
export default runEngineGame;
