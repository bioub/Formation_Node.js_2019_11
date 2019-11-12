function setTimeoutSync(cb, delay) {
  const debut = Date.now();
  while (debut + delay > Date.now()) {}
  cb();
}

setTimeoutSync(() => console.log('A'), 1000);
console.log('B');


// pile d'appels
// ^
// |            lg
// |            =>
// |setTimeoutSync - lg
// +------------1000--------------------------------> temps
//              A    B
