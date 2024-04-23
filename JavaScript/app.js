const operations = [100, -20, 7, -20, 50];
// const positiveOperations = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOperations.push(operation);
//     }
// }

// console.log('positiveOperations :', positiveOperations);

const positiveOperations = operations.filter(operation => {return operation > 0});
const negativeOperations = operations.filter(operation => {return operation < 0});


positiveOperations
console.log('positiveOperations :', positiveOperations);
negativeOperations
console.log('negativeOperations :', negativeOperations);