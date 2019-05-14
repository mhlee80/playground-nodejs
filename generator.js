function* idMaker(){
  var index = 0;
  while(true)
      yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen);
console.log(gen.next());
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2


function myNumber(){
  return 10000;
}

function* numberMaker(){
  var number = 0;
  while(true)
    yield myNumber();
}

gen = numberMaker();
console.log(gen);
console.log(gen.next());
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);


function asyncfunc() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('!!!!!');
    }, 1000);
  });
}

function* promiseMaker() {
  // while(true)
    asyncfunc().then((result) => {
      console.log(result);
      // yield result;
    });

    // yield asyncfunc();
}

gen = promiseMaker();
console.log(gen);
console.log(gen.next());
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);