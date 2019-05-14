class Parent {}

class Child extends Parent {}

const c = new Child();
const p = new Parent();

console.log('c is instance of Child: ', c instanceof Child);
console.log('c is instance of Parent: ', c instanceof Parent);

console.log('p is instance of Child: ', p instanceof Child);
console.log('p is instance of Parent: ', p instanceof Parent);