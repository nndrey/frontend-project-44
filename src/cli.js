import readlineSync from 'readline-sync';

const greetingUser = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greetingUser;
