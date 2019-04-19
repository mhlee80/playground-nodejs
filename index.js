/* Simple Hello World in Node.js */
// console.log("Hello World");

// class Test {
//   constructor(a, b) {
//     this.memberA = a;
//     this.memberB = b;
//   }

//   print() {
//     console.log("a:", this.memberA);
//     console.log("b:", this.memberB);
//   }
  
//   testPromise() {
//     return new Promise((resolve, reject) => {
//       console.log("memberA:", this.memberA);
//       resolve("1");
//     });
//   }
// }

// var a = new Test("aaa", "bbb");
// a.testPromise().then(function(text) {
//     console.log("text:", text);
//     return;
// });

// function initPromise() {
//   return new Promise(function(res, rej) {
//     res("initResolve");
//   })
// }

// initPromise()
//   .then(function(result) {
//     console.log(result); // "initResolve"
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//           resolve("secondPromise");
//       }, 1000)
//     })
//   })
//   .then(function(result) {
//     console.log(result); // "secondPromise"
//   });

