// Human
let age = 14;
let name = "Boris";
let money = 10;
let happiness = 100;
let reputation = 0.0;
if (age < 14) {
    money == 0;
}

//Work

function Work () {
    if (happiness >= 50 && age < 150) {
        money++;
        happiness--;
        reputation++;
        age = age + 0.5;
        console.log("Success")
    }
    else {
        console.log("you cant do it");
    }
}

function hardWork () {
    if (reputation > 10 && happiness >= 50 && age < 150) {
        money = money + 2;
        reputation = reputation + 2;
        happiness--;
        age++;
        console.log("Success")
    }
    else {
        console.log("you cant do it");
    }
}

function ultraWork () {
    if (reputation > 20 && happiness >= 50 && age < 150) {
        money = money + 5;
        reputation = reputation + 3;
        happiness = happiness - 2;
        age++;
        console.log("Success")
    }
        else {
                console.log("you cant do it");
        }
    }


function work5x () {
    if (reputation > 40 && happiness >= 50 && age < 150) {
        money = money + 10;
        reputation = reputation + 5;
        happiness = happiness - 5;
        age++;
        console.log("Success")
    }
        else {
            console.log("you cant do it");
        }
    }

function rest () {
    reputation = reputation - 0.5
    happiness = happiness + 5;
    console.log("Success")
}

function gift () {
    if (money >= 30) {
        money = money - 50
        happiness = happiness + 50
        console.log("Success")
    }
    else {
        console.log("you cant do it")
    }
}

function stats () {
    console.log(`age: ${age}`)
    console.log(`money: ${money}`)
    console.log(`happiness: ${happiness}`)
    console.log(`reputation: ${reputation}`)
}

function check () {
    if (money >= 500 && reputation >= 100 && happiness >= 100) {
        console.log("////////////Ending////////////")
        console.log(`Stats:`)
        console.log(`age: ${age}`)
        console.log(`money: ${money}`)
        console.log(`happiness: ${happiness}`)
        console.log(`reputation: ${reputation}`)
    }
    else {
        console.log("you cant do it");
        console.log(`you need:
500 Money
100 happiness
100 reputation`);
    }
}

function old () {
    if (money >= 50) {
        age = age - 2;
        money = money - 2;
        console.log("Success")
    }
    else {
        console.log("you cant do it");
    }
}


document.getElementById('work').onclick = Work;
document.getElementById('hardwork').onclick = hardWork;
document.getElementById('ultrawork').onclick = ultraWork;
document.getElementById('work5x').onclick = work5x;
document.getElementById('rest').onclick = rest;
document.getElementById('gift').onclick = gift;
document.getElementById('stats').onclick = stats;
document.getElementById('Old').onclick = old;
document.getElementById('check').onclick = check;