// const p = () => {new Promise((res, rej) => {
//   setTimeout(() => {
//     res('!!!!!');
//   }, 1000);
// })};

async function *gen() {
  function asyncfunc() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('!!!!!');
      }, 1000);
    });
  }

  yield asyncfunc();
  // async function f1() {
  //   let x = await asyncfunc();
  //   console.log('x', x);
  //   return x;
  // }

  // let z = f1();
  // console.log(z);
  // yield z;
  // var x = await asyncfunc();
  // console.log(x);
  // const result = await p;

  // console.log(result);
  // // yield 1;
  // p.then(result => {
  //   // yield 1;
  //   console.log(result);
  //   return '!!!';
  // })

  // return 'return';
  // console.log('!!!');

  // setTimeout(() => {
  //   console.log('!!!!!');
  // }, 1000);
}

var g = gen();
console.log('g', g);

console.log('g.next', g.next());


// result = gen();

// // const result = yield gen();
// console.log(result);

// result = 
// console.log(result);