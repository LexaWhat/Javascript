/* 
    Найти среднее значение последовательность
    числе с помощю .reduce
*/

//      My:

// array
const arr = [1, 4, 4, 10];
// summing all array elements with .reduce
const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
// divide sum of elements with array length
const average = sum / arr.length;
// console log
console.log("Average:", average);



// His:

const avg = arr.reduce((acc, el, i) => {
    if (i != arr.length - 1) {
        return acc + el;
    }else {
        return (acc + el) / arr.length
    }
}, 0);

console.log('avg :', avg);

