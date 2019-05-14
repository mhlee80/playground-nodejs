class TestVarFunc {
  constructor() {
    this.memberVar = () => {
      console.log(this);
    }
  }
  
  // memberVar = () => {
  //   console.log(this);
  // }

  memberFunc() {
    console.log(this);
  }
}

let a = new TestVarFunc();

// console.log(a.memberVar);

a.memberVar();
a.memberFunc();

class TestVarFunc2 {

}

let b = new TestVarFunc2();

b.testVar = a.memberVar;
b.testFunc = a.memberFunc;

b.testVar();
b.testFunc();


const obj1 = {
  name : 'Lee',
  sayName : () => {
    console.log(`hi + ${this.name}`);
  }
};

obj1.sayName(); // hi + undefined

const obj = {
  name: 'Lee',
  sayHi() { // === sayHi: function() {
    console.log(`Hi ${this.name}`);
  }
};
 
obj.sayHi(); // Hi Lee
