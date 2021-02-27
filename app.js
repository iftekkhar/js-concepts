//Strings are Immutable . Note that this does not mean that the variable cannot be changed, just that the individual characters of a string literal cannot be changed.
// everything to the right of the equal sign is resolved before the value is assigned

// Typeof Vs instanceof
/*
1. The typeof operator checks if a value belongs to one of the seven basic types: number, string, boolean, object, function, undefined or Symbol.
 */
// var dog = new Animal();
// dog instanceof Animal; // Output : true

/*------------------------------------------------------------------------------------------------------------------------- */
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// The Set object lets you store unique values of any type, whether primitive values or object references.

// Get 
/*------------------------------------------------------------------------------------------------------------------------- */
// All About NaN
/*
NaN !== NaN
NaN < 2 // false
NaN > 2 // false
NaN === 2 // false
typeof NaN // Output number
*/

var obj = {
    message: "Hello",
    innerMessage: function () {
        console.log(this);
    }()
};
console.log(obj.innerMessage);


// var animals = [
//     { name: 'Fluffykins', species: 'rabbit' },
//     { name: 'Caro', species: 'dog' },
//     { name: 'Hamilton', species: 'dog' },
//     { name: 'Harold', species: 'fish' },
//     { name: 'Ursula', species: 'cat' },
//     { name: 'Jimmy', species: 'fish' }
// ]
// var dog = animals.filter(animal => animal.species == 'dog')
// console.log(dog)










