// let errors = {};
// errors.noBody = new Error('no body');
// errors.noEmail = new Error('no email');
// errors.noName = new Error('no name');
// errors.noSysopFound = new Error('no sysop found');

// let error = new Error('!!!!!');
// console.log('err:', error.stack);

class TestError extends Error {
  constructor() {
    super('test');
  }
}

TestError.dict = {
  'k': 'v'
}

let errClass = TestError;


// let errfunc = function() { return new Error('!!!!'); };

// console.log('error:', errfunc().stack);

let errObj = new TestError();
let errObj2 = new Error();
// console.log('errObj', errObj.stack);
console.log('type of errObj:', typeof errObj);
console.log('type comparison:', typeof errObj === typeof errObj2);

console.log('constructor name:', errObj.constructor.name);
console.log('constructor name:', errObj2.constructor.name);

console.log(TestError.dict);
console.log(errObj.dict);

console.log('prototype:', errObj.prototype);
console.log(errObj.__proto__);
console.log(errObj.__proto__);

console.log('instance of:', errObj instanceof TestError);
console.log('instance of:', errObj2 instanceof TestError);

// Error.className = 
// errors.makeResponse = function(err) {
//   switch(true) {
//     case err == errors.noBody:
//     case err == errors.noEmail:
//     case err == errors.noName:
//       return new ErrResponse(400, err.message);
//     default:
//       return new ErrResponse(400, err.message, err);
//   }
// };

// for (const [k, v] of Object.entries(errors)) {
//   console.log(k, v);
// }
