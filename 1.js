//what are the different ways to create object in javascript
//the simplest way to create objects is using object literal 
let obj = {

}
console.log(obj)
//using obj.create method
const obj2 = Object.create(null);
console.log(obj2);

//using object constructor
const obj3 = Object();
console.log(obj3);

//using object.assing
const obj4 = Object.assign({});
console.log(obj4,"obj4");

//using function constructor
function Person(name, greeting){
this.name = name;
this.greeting = greeting;
}

const obj5 = new Person('niki', 'hi');
console.log(obj5);

//using function constructor with prototypes
function Name(name){
this.name =name;
}

Name.prototype.sayName = function(){
    console.log(this.name)
}

const obj6 = new Name('Niki');
console.log(obj6);
obj6.sayName();

//using map and then converting to obj

const map = new Map();
map.set('name','Niki');
map.set('age','29');
const obj7 = Object.fromEntries(map);
console.log(obj7)