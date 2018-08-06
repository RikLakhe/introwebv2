let total = 0;
let numberOne = "";


let display = document.querySelector('.number');

// console.log(display.innerText);

let clear = document.querySelector('.clear');
clear.addEventListener("click", function() {
    // alert("clear");
    display.innerText = 0;
    total = 0;
    numberOne = "";

})

let del = document.querySelector('.delete');
del.addEventListener("click", function() {
    // alert("delete");
    if (numberOne.length === 0) {
        return 0;
    }

    if (numberOne.length === 1) {
        var str = numberOne;
        str = str.slice(0, -1);
        numberOne = str;
        display.innerText = 0;

    } else {

        var str = numberOne;
        str = str.slice(0, -1);
        numberOne = str;
        display.innerText = str;
    }

})

let divide = document.querySelector('.divide');
divide.addEventListener("click", function() {
    // alert("divide");
    var tempOne = parseInt(numberOne, 10);
    total = total / tempOne;
    display.innerText = total;
    numberOne = 0;

})

let multi = document.querySelector('.multi');
multi.addEventListener("click", function() {
    // alert("multi");
    var tempOne = parseInt(numberOne, 10);
    console.log(tempOne);
    console.log(total);
    if (total === 0) {
        total = tempOne;
        // alert('true');
        console.log(total);
        display.innerText = total;
        numberOne = 0;
    } else {
        total = total * tempOne;
        display.innerText = total;
        numberOne = 0;
        console.log(total);
    }

})

let sub = document.querySelector('.sub');
sub.addEventListener("click", function() {
    // alert("sub");
    console.log(total);
    var tempOne = parseInt(numberOne, 10);
    total = total - tempOne;
    display.innerText = total;
    numberOne = 0;
    console.log(total);
})
let plus = document.querySelector('.plus');
plus.addEventListener("click", function() {
    // alert("plus");
    console.log(total);
    display.innerText = total;
    var tempOne = parseInt(numberOne, 10);
    total = total + tempOne;
    display.innerText = total;
    numberOne = 0;
    console.log(total);


})

let seven = document.querySelector(".seven");
seven.addEventListener("click", function() {

    numberOne = numberOne + seven.innerText;
    display.innerText = parseInt(numberOne, 10);
})

let eight = document.querySelector(".eight");
eight.addEventListener("click", function() {
    numberOne = numberOne + eight.innerText;
    display.innerText = parseInt(numberOne, 10);
})
let nine = document.querySelector(".nine");
nine.addEventListener("click", function() {
    numberOne = numberOne + nine.innerText;
    display.innerText = parseInt(numberOne, 10);
})
let four = document.querySelector(".four");
four.addEventListener("click", function() {
    numberOne = numberOne + four.innerText;
    display.innerText = parseInt(numberOne, 10);
})
let five = document.querySelector(".five");
five.addEventListener("click", function() {
    numberOne = numberOne + five.innerText;
    display.innerText = parseInt(numberOne, 10);
})
let six = document.querySelector(".six");
six.addEventListener("click", function() {
    numberOne = numberOne + six.innerText;
    display.innerText = parseInt(numberOne, 10);
})
let one = document.querySelector(".one");
one.addEventListener("click", function() {
    numberOne = numberOne + one.innerText;
    display.innerText = parseInt(numberOne, 10);
})
let two = document.querySelector(".two");
two.addEventListener("click", function() {
    numberOne = numberOne + two.innerText;
    display.innerText = parseInt(numberOne, 10);
})
let three = document.querySelector(".three");
three.addEventListener("click", function() {
    numberOne = numberOne + three.innerText;
    display.innerText = parseInt(numberOne, 10);
})

let zero = document.querySelector(".zero");
zero.addEventListener("click", function() {
    numberOne = numberOne + zero.innerText;
    display.innerText = parseInt(numberOne, 10);
})