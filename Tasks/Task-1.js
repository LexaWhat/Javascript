/*
Your hourly rate is $80 and you are willing to work no more than 5 hours a day, 5 days a week (except weekends).
A customer comes to you and offers an order for 40 hours of work.
It's Monday.
You must leave in 11 days.
Output to the console:
Boolean whether you will have time to get down to work
How much are you asking for it??
*/

let hour = 80;      // how many money per hour
let day = 5 * hour;     // how many money per day
let week = day * 5;     // how many money per week

let hourTime = 1;       // time per hour
let dayTime = hour * 5;     // time per day
let weekTime = day * 5;     // time per week

let work = hourTime * 40;  // how many work
let time = dayTime * 11-2;   // how many time


console.log('can i work? ' + ( time >= work)) //result true because 9 days with 5 hours is bigger than 40 hours, 45 > 40
console.log('i will get ' + work * hour + "$")  // money