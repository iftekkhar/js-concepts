//Object Construction Total 4 Ways (Object Literals are not shown here)
// Object.create()
var employee = {
    name: 'Nishant',
    displayName: function () {
        console.log(this.name);
    }
};

var emp1 = Object.create(employee);
console.log(emp1); //Output {}  ---> Creates a copy and properties Saves in Prototype

// new Object()
var emp2 = new Object(employee);
console.log(emp2); //Output { name: 'Nishant', displayName: [Function: displayName] }  // Creates a Copy

//Constructor Function for inheritance 
function Person(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.incrementSalary = function (byValue) {
        this.salary = this.salary + byValue;
    };
}
function Employee(company) {
    this.company = company;
}

//Prototypal Inheritance 
Employee.prototype = new Person("Nishant", 24, 5000);

//New Object Construction will inherit both the objects property 
var emp1 = new Employee("Google");

console.log(emp1 instanceof Person); // true
console.log(emp1 instanceof Employee); // true

/*------------------------------------------------------------------------------------------------------------------------- */
// Calculate the length of an object
// 
var counterArray = {
    A: 3,
    B: 4
};
counterArray["C"] = 1;
console.log(Object.keys(counterArray).length) //Output 3

/*------------------------------------------------------------------------------------------------------------------------- */
// FOR IN LOOP

// Looping an Object properties
// Returns inherited Properties & Methods As well 
// Shouldn't use to loop over arrays as index of an array could be temporary

const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(`${key}: ${object[key]}`);
} //output a: 1 /n b: 2 /n c: 3 

/*------------------------------------------------------------------------------------------------------------------------- */
// Check if an Object in a Array or Not
/*JavaScript returns Object for NULL , Array, Object*/
const arr = [1, 2, '3', { foo: 'bar' }, ['a', 'b']]
const obj = { foo: 'bar' }
const nullValue = null;

console.log(arr.toString()); // Output [object Object]
console.log(obj.toString()); // Output [object Object]


console.log(toString.call(arr)); // Object [object Array]
console.log(toString.call(obj)); // Output [object Object]
console.log(toString.call(nullValue)); // Output [object Null]

console.log(arr.constructor.name === "Array") //Output True
console.log(arr instanceof Array) //Output True

const result = Array.isArray(arr);  // true
const result1 = Array.isArray(obj); // false
const result2 = Array.isArray(nullValue);   // false
const result3 = Array.isArray(undefined);  // false
console.log(result3)


/*------------------------------------------------------------------------------------------------------------------------- */
// Detect Undefined Object Property in an Object
var person = {
    name: 'Nishant',
    age: 24
}
console.log(typeof person.salary === 'undefined'); // One way
console.log(person.salary in person); // Second Way

/*------------------------------------------------------------------------------------------------------------------------- */
// The Delete Operator in Object & Array
/*
1. Only Deletes the Properties of an Object or Elements of an array.
2. Doesn't Delete an Array Element, Rather Empties the Position  
3. Deletes and Empties an Object Property. 
4. Delete operator doesn't delete prototype property
 */
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];

const x = { foo: 1 };
const output = (function () {
    delete x.foo;
    return x.foo;
})();

console.log(trees.length); // Output 5
console.log(trees[3]); // Output undefined
console.log(x); // Output {}


/*------------------------------------------------------------------------------------------------------------------------- */
// How we can prevent modification of an object in JavaScript ?
/*
1. Object.preventExtensions(objName); //No new properties or methods can be added to the object, but one can change the existing properties and method.
2. Object.seal(employee); // prevent existing properties and methods from being deleted ,  Sealed object are also non-extensible
3. Object.freeze(employee); // All properties and methods are read only

for Checking :
console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee));     // true
console.log(Object.isFrozen(employee));     // true
*/


/*------------------------------------------------------------------------------------------------------------------------- */
// What is non-enumerable property in JavaScript and how you can create one? (Doesn't show up on loops & Object.keys)
// Gets added as a local property to the object (not in prototype) but is read only.
// Value can not be updated

var person = {
    name: 'John'
};
person.salary = '10000$';
person['country'] = 'USA';

// Create non-enumerable property
Object.defineProperty(person, 'phoneNo', {
    value: '8888888888',
    enumerable: false
})

Object.keys(person); // ['name', 'salary', 'country'] 
/*
As we know that person object properties name, salary ,country are enumerable hence it's shown up when we called Object.keys(person).

To create a non-enumerable property we have to use Object.defineProperty(). This is a special method for creating non-enumerable property in JavaScript.
Wont be Able to change the value
*/


/*------------------------------------------------------------------------------------------------------------------------- */
// I dont Know why this Happens
function User(name) {
    this.name = name || "JsGeeks";
}

var person = new User("xyz")["location"] = "USA";
console.log(person); //Output USA



/*------------------------------------------------------------------------------------------------------------------------- */
//Object Oriented
function Person(name, age) {
    this.name = name || "John";
    this.age = age || 24;
    this.displayName = function () {
        console.log(this.name);
    }
}

Person.name = "John";
Person.displayName = function () {
    console.log(this.name);
}

var person1 = new Person('John');
person1.displayName();
Person.displayName();

// Memory Pointer Issues

var objA = { prop1: 42 };
var objB = objA;
objB.prop1 = 90;
console.log(objA) // {prop1: 90}
objB = {};
console.log(objA) // {prop1: 90}  --> Here a New object has been assigned to objB

    /*------------------------------------------------------------------------------------------------------------------------- */
    // obj.toString() returns undefined
    (function () {
        var objA = Object.create({
            foo: 'foo'
        });

        console.log(objA); // {}

        var objB = objA;
        objB.foo = 'bar';

        console.log(objA); // { foo: 'bar' }
        console.log(objA); // { foo: 'bar' }
        console.log(objA.foo); // bar
        console.log(objB.foo); // bar

        delete objA.foo;

        console.log(objA); // {}
        console.log(objA); // {}
        console.log(objA.foo); // foo
        console.log(objB.foo); // foo

        var objC = Object.create(objA);

        console.log(objA.toString() == objC.toString()); //true true
        console.log(objA.toString() === objC.toString()); //true true
    }());
/*------------------------------------------------------------------------------------------------------------------------- */

