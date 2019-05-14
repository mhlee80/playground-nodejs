class ClassA {
  constructor() {
    console.log('in constructor:', this.constructor.name);
    console.log('in constructor:', `${this.constructor.name}.UpdateEmail`);
  }
}

console.log('name of class:', ClassA.name);

let instance = new ClassA();

console.log('name of instance:', instance.constructor.name);
