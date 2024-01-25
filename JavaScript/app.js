 const projectName = "сайт магазина";
const price = 2000;
const author = "Василий Пупкин";

const template = author + " заказал " + projectName + " по цене " + price + "$";

console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`;

console.log(template2);

const template3 = "проект \n" + "цена: " + price + "$";

console.log(template3);

const template4 = `проект \nцена: ${price} $`;

console.log(template4);

const template5 = `проект
цена ${price}$`
console.log(template5);