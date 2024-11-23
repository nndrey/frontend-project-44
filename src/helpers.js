const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const isEvenNumber = (num) => num % 2 === 0;
const doArrayOfProgressions = (size, step, startNum) => {
  const result = [startNum];
  let start = startNum;
  for (let i = 0; i < size - 1; i += 1) {
    start += step;
    result.push(start);
  }
  return result;
};

const calculateGcd = (numFirst, numSecond) => {
  let moreNumb = numFirst;
  let lessNumb = numSecond;
  if (moreNumb < lessNumb) {
    moreNumb = numSecond;
    lessNumb = numFirst;
  }
  let remainderOfDivision = moreNumb % lessNumb;
  while (remainderOfDivision !== 0) {
    moreNumb = lessNumb;
    lessNumb = remainderOfDivision;
    remainderOfDivision = moreNumb % lessNumb;
  }
  return lessNumb;
};

export { random, isPrimeNumber, isEvenNumber, doArrayOfProgressions, calculateGcd };
