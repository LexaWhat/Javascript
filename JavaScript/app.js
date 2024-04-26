const operations = [100, -20, 7, 6, 12, -10, -30, 50];

let balance = 0;
for (const operation of operations) {
    balance += operation;
}

balance
console.log('balance :', balance);


const finalBal = operations.reduce((acc, value) => {
    return acc += value;
}, 0);

finalBal
console.log('finalBal :', finalBal);