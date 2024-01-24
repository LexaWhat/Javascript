/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean nepеменную успеете ли вы взяться за работу
Сколько вы за неё попpocume?
*/

let hour = 80;      // how many money per hour
let day = 5 * hour;     // how many money per day
let week = day * 5;     // how many money per week

let hourTime = 1;       // time per hour
let dayTime = hour * 5;     // time per day
let weekTime = day * 5;     // time per week

let work = hourTime * 40;  // how many work
let time = dayTime * 11-2;   // how many time


console.log('can i work? ' + ( time >= work)) //result true because 11 days with 5 hours is bigger than 40 hours, 45 > 40
console.log('i will get ' + work * hour + "$")  // money