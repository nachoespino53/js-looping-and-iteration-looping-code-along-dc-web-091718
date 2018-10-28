const printBadges = (anArr) => {
  for (let i = 0; i < anArr.length; ++i) {
    console.log(`Welcome ${anArr[i]}! You are employee #${i + 1}.`);
  }
  return anArr;
}

const tailsNeverFails = () => {
  let counter = 0;
  let coin = Math.random();
  while (coin >= .5) {
    counter++;
    coin = Math.random();
  }

  return `You got ${counter} tails in a row!`;
}
