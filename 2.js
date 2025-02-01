//function currying
//use cases
//code reusability
const multiply = (a) => (b) => a*b;
const double = multiply(2);
const triple = multiply(3);
console.log(double(5));
console.log(triple(10));


//functional composition
//composing simpler functions
const greet = (greeting) => (name)=> console.log('Hey', name, greeting);
const sayHi = greet('Goodmorning');
const sayBye = greet('Goodbye');
sayHi('Niki');
sayBye('John')