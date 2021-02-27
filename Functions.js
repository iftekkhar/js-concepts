// If nothing is returnd then calling the function will return undefined. 


// (function () {
//     console.log(typeof displayFunc); //undefined
//     var displayFunc = function () {
//         console.log("Hi I am inside displayFunc");
//     }
//     console.log(typeof displayFunc); //function
// }());

// /*------------------------------------------------------------------------------------------------------------------------- */
// var employeeId = 'abc123';
// function foo() {
//     employeeId = '123bcd';
//     return;

//     function employeeId() { }
// }
// foo();
// console.log(employeeId);
/*------------------------------------------------------------------------------------------------------------------------- */

// var employeeId = 'abc123';

// function foo() {
//     employeeId();
//     return;

//     function employeeId() {
//         console.log(typeof employeeId);  // function
//     }
// }
// foo();

/*------------------------------------------------------------------------------------------------------------------------- */
// function foo() {
//     employeeId();
//     var product = 'Car';
//     return;

//     function employeeId() {
//         console.log(product); //undefined
//     }
// }
// foo();

// (function foo() {
//     bar();

//     function bar() {
//         abc();
//         console.log(typeof abc); //function
//     }

//     function abc() {
//         console.log(typeof bar);  // function
//     }
// }()); 

var obj = {
    message: "Hello",
    innerMessage: function () {
        return this.message;
    }
};

console.log(obj.innerMessage()); // Hello