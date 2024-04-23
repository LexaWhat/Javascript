// const score = [5, 10, 0, 15];

// const totalScore = score.reduce((acc, curr) => acc + curr, 0);

// console.log(`Общее количество очков: ${totalScore}`);

// // for (const [i, el] of score.entries()) {
// //     console.log(`Round ${i + 1}: ${el} Points`);
// // }

// score.forEach(function (scoreEl, i, arr){
//     console.log(`Round ${i + 1}: ${scoreEl} Points`);
// })

// // (5,0) => { ... }
// // (10,1) => { ... }

const transactionsInUsd = [10, -7, 50, -10, 100];
const transactionInRub = [];
for (const transaction of transactionsInUsd) {
    transactionInRub.push(transaction * 60);
}
const transactionsInRub2 = transactionsInUsd.map((transaction) => transaction * 60);

console.log('Old_transactionsInUsd:', transactionsInUsd);
console.log('Old_transactionInRub:', transactionInRub);



console.log('transactionsInUsd :', transactionsInUsd);
console.log('transactionInRub :', transactionsInRub2);