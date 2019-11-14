function randomEcho(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, Math.random() * 1001);
  });
}

randomEcho('A').then((letter) => console.log(letter));
randomEcho('B').then((letter) => console.log(letter));
randomEcho('C').then((letter) => console.log(letter));
randomEcho('D').then((letter) => console.log(letter));

Promise.all([
  randomEcho('A'),
  randomEcho('B'),
  randomEcho('C'),
  randomEcho('D'),
]).then((letters) => {
  console.log(letters)
})
