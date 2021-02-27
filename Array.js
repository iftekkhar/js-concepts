// // Array Memory Pointer Problems
// const arrA = [1, 2, '3', { foo: 'bar' }, ['a', 'b']]

// const arrB = arrA.slice() //outputs a shallow copy of the parent array
// arrB[0] = 42;
// console.log(arrB)  // [ 42, 2, '3', { foo: 'bar' }, [ 'a', 'b' ] ]
// console.log(arrA)  // [ 1, 2, '3', { foo: 'bar' }, [ 'a', 'b' ] ]

// const arrC = arrA //outputs the exact same Array (copied by ref)
// arrC[3].foo = 'noBar'
// console.log(arrC)  // [1, 2, '3', { foo: 'noBar' }, ['a', 'b']]
// console.log(arrA)  // [1, 2, '3', { foo: 'noBar' }, ['a', 'b']]

/*------------------------------------------------------------------------------------------------------------------------- */

// // Create array
// (function () {
//     var array1 = new Array('100');
//     console.log(array1);  // output ['100']
//     console.log(array1.length); // 1

//     var array2 = new Array(100);
//     console.log(array2);  // output [<100 empty items]
//     console.log(array2.length); // 100

//     Array.of(1, 2, 3); // output [1,2,3]
//     Array(1, 2, 3); // output [1,2,3]

//     var array3 = new Array(['1', 2, '3', 4, 5.6])
//     console.log(array3);  // output [['1', 2, '3', 4, 5.6]]
//     console.log(array3.length); // 1

//     var array4 = new Array('a', 'b', 'c', 'd', 'e');
//     console.log(array4);  // output [ 'a', 'b', 'c', 'd', 'e' ]
//     array4[10] = 'f';
//     console.log(array4);  // output [ 'a', 'b', 'c', 'd', 'e', <5 empty items>, 'f' ]
//     delete array4[10];
//     console.log(array4);  // output [ 'a', 'b', 'c', 'd', 'e', <6 empty items> ]
//     console.log(array4.length); // 11
// }());

/*------------------------------------------------------------------------------------------------------------------------- */
//Array methods
/*
isArray()
1. Determines if the passed value is an array or not
*/
// const arr = [1, 2, '3', { foo: 'bar' }, ['a', 'b']]
// const obj = { foo: 'bar' }
// const nullValue = null;
// const result = Array.isArray(arr);  // true
// const result1 = Array.isArray(obj); // false
// const result2 = Array.isArray(nullValue);   // false
// const result3 = Array.isArray(undefined);  // false
// console.log(result3)
/*
indexOf() vs lastIndexOf()
1. returns the 1st index of the item passed inside
2. Does a shallow check ( returns -1 for objects & arrays inside an array as they are not found)
Reason : Objects and arrays are referenced type, obj != obj only reference of an object = reference of an object.
3. The second value determines which index to start form
4. lastIndexOf() returns the last index of the passed element .
*/
/*
join() 
1. both slips ot joins by the values passed inside i.e "" , - etc
2. if Nothing passed the joined by ,
*/

/*
 trim() & split() -- string method
1. Trim removes any spaces or line breaks
2. Split() splits based on the passed element ,
*/

/*
toString()
1. joins by ,
*/

/*
slice() --new Array
1. returns a shallow copy
2. start & End Value
*/
(function () {
    var list = ['foo', 'bar', 'john', 'ritz'];
    console.log(list.slice(1)); // [ 'bar', 'john', 'ritz' ]
    console.log(list.slice(1, 3)); // [ 'bar', 'john' ]
    console.log(list.slice(2, 2)); // [ 'foo', 'bar', 'john', 'ritz' ]
    console.log(list.slice()); // []
    console.log(list); //[ 'foo', 'bar', 'john', 'ritz' ]
})();

/*
splice(start, deleteCount, items...)
1. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
*/
(function () {
    var list = ['foo', 'bar', 'john'];
    console.log(list.splice(1)); // [ 'bar', 'john' ]
    console.log(list.splice(1, 2)); // []
    console.log(list); // [ 'foo' ]
})();
/*
reverse()
1. Changes an Original Array
2. Reverses an array
*/

/*
find() --HOF
1. takes a call back function
2. The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
3. The value of the first element in the array that satisfies the provided testing function is returned. Otherwise, undefined is returned.
*/
/*
findIndex() --HOF
1. takes a call back function
2. The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
3. The index of the first element in the array that passes the test. Otherwise, -1.
4. If you need the index of the found element in the array, use findIndex().
*/

/*
filter() --HOF --new Array
1. takes a call back function
2. Returns a new Array with all the elements that passes the test (only if there is something to return, if not it will not return anything)
3. A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
*/
var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' },
];
var dog = animals.filter((animal) => animal.species == 'dog');
console.log(dog);

// (
//     /*
//     reduce() -- HOF --new Array
//     */

//     /*
//     sort() -- HOF --new Array
//     1. Optional Compare Function
//     2. (a,b) => a -b || b - a
//     */
//     function () {
//         var arrayNumb = [2, 28, 8, 15, 1667, 273, 42];
//         arrayNumb.sort();
//         console.log(arrayNumb); // [15, 1667,  2, 273,   28, 42, 8 ]
//         arrayNumb.sort((a, b) => a - b);
//         console.log(arrayNumb); // [ 2,  8,  15, 28, 42, 273, 1667 ]
//     }
// )();

/*
some() -- HOF --boolean
1. Takes a Callback Function
2. Returns only a Boolean if atleast one item passes the test
*/

/*
every() -- HOF --boolean
1. Takes a Callback Function
2. Returns only a Boolean if all or no items passes the test
3.Calling this method on an empty array will return true for any condition!
*/

/*
forEach() vs map() --new Array  --HOF
1. Both are iterators
2. takes a call back functions
3. map returns a new array, forEach doesn't
*/
