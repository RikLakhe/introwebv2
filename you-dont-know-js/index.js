const TAX_RATE = 0.88;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 1.09;
const SPEND_THRESHOLD = 200;

var currentBalance = parseInt(prompt('enter current balance :'), 10);
var ammount = 0;

console.log(currentBalance);

function addTax(ammount) {
    return ammount * TAX_RATE;
}

function formatTotal(ammount) {
    var properFormat = "$" + ammount.toFixed(2);
    return properFormat;
}

function checkBalance(ammount) {
    if (ammount > currentBalance) {
        return false;
    } else {
        return true;
    }
}

function affortAccessories(ammount) {
    if (ammount < SPEND_THRESHOLD) {
        return true;
    } else {
        return false;
    }
}

while (checkBalance(ammount)) {
    ammount += PHONE_PRICE;
    if (affortAccessories(ammount)) {
        ammount += ACCESSORY_PRICE;
    }

}

ammount += addTax(ammount);


console.log(` your total is : ${formatTotal(ammount)}`);



if (checkBalance(ammount)) {
    console.log("can affort it");

} else {
    console.log("cant affort it");
}