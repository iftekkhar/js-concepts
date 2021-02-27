// What will be the value of b
(function () {
    var a = (b = 5);
})();
console.log(i);
/*------------------------------------------------------------------------------------------------------------------------- */

// What will be the value of i
var i = 0;
for (i = 1; i <= 10; i++) {
    console.log(i);
}
console.log(i);

// with SetTimeout
// for (let i = 1; i <= 5; ++i) {
for (i = 1; i <= 5; ++i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

/*------------------------------------------------------------------------------------------------------------------------- */
// Sort the words in the string alphabetically, and print them out VERTICALLY in THREE columns to STDOUT, separated by space(s). All three columns' heights should be as evenly weighted as possible.
const sortStringInThreeColumns = (parentString) => {
    const parentArray = parentString.split(' ');

    if (parentArray.length % 3 === 2) {
        const divider = Math.floor(parentArray.length / 3);
        var arrayOne = parentArray.slice(0, divider + 1);
        var arrayTwo = parentArray.slice(divider + 1, divider * 2 + 2);
        var arrayThree = parentArray.slice(divider * 2 + 2);
    } else if (parentArray.length % 3 === 1) {
        const divider = Math.floor(parentArray.length / 3);
        var arrayOne = parentArray.slice(0, divider + 1);
        var arrayTwo = parentArray.slice(divider + 1, divider * 2 + 1);
        var arrayThree = parentArray.slice(divider * 2 + 1);
    } else {
        const divider = Math.floor(parentArray.length / 3);
        var arrayOne = parentArray.slice(0, divider);
        var arrayTwo = parentArray.slice(divider, divider * 2);
        var arrayThree = parentArray.slice(divider * 2);
    }
    for (
        let i = 0, j = 0, k = 0;
        i <= arrayOne.length, j <= arrayTwo.length, k <= arrayThree.length;
        i++, j++, k++
    ) {
        console.log(`${arrayOne[i]}  |   ${arrayTwo[j]}   |  ${arrayThree[k]}`);
    }
};
sortStringInThreeColumns('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
