 /*
Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13 500$
через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const deposit = 10000
const rate = 0.07;
const depositLength = 24;
const house = 13500

const result = deposit * (1 + rate / 12) ** 24;

if (result > house) {
    console.log(`мы накопили ${result}`);
    console.log(`сможем купить, остаток: ${result - house}$ `);
}
else {
    console.log(`мы накопили ${result}`);
    console.log(`не сможем купить, еще надо:${house - result}$`);
}
