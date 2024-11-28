import readlineSync from 'readline-sync';

const runEngineGame = (generateRound, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const resultGame = generateRound();
    console.log(`Question: ${resultGame.question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (resultGame.correctAnswer !== answerUser) {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${resultGame.correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default runEngineGame;
