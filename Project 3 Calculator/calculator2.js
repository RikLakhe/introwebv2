var key = document.querySelectorAll('.key');
var display = document.querySelector('.number');

var total = 0;
var enterNumber = "";
var signFlag = "";
printNumber(0);

Array.from(key).forEach(link => {
    link.addEventListener('click', function(event) {
        console.log(this.innerText);
        var keyPress = this.innerText;
        checkKey(keyPress);

    })
})

function printNumber(temp) {
    display.innerText = temp;
}

function checkKey(keyPressed) {
    switch (keyPressed) {
        case "1":
            console.log(1);
            addToNumber(1);
            break;

        case "2":
            console.log(2);
            addToNumber(2);
            break;
        case "3":
            console.log(3);
            addToNumber(3);
            break;

        case "4":
            console.log(4);
            addToNumber(4);
            break;

        case "5":
            console.log(5);
            addToNumber(5);
            break;

        case "6":
            console.log(6);
            addToNumber(6);
            break;

        case "7":
            console.log(7);
            addToNumber(7);
            break;

        case "8":
            console.log(8);
            addToNumber(8);
            break;

        case "9":
            console.log(9);
            addToNumber(9);
            break;

        case "0":
            console.log(0);
            addToNumber(0);
            break;

        case "C":
            console.log("Clear");
            clearAll();
            break;

        case "+":
            console.log("plus");
            signFlag = "plus";
            break;

        case "-":
            console.log("minus");
            signFlag = "minus";
            break;
        case "X":
            console.log("multiply");
            signFlag = "multiply";
            break;
        case "÷":
            console.log("divide");
            signFlag = "divide";
            break;
        case "←":
            console.log("delete");
            removeNumberLast();
            break;
        case "=":
            console.log("equal");
            signFlag = "equal";
            break;
        default:
            break;
            console.log("");
    }
}

function addToNumber(numberPressed) {
    if (checkLimitNumber()) {
        return;
    }
    enterNumber = enterNumber + numberPressed;
    // display.innerText = parseInt(enterNumber, 10);
    printNumber(parseInt(enterNumber, 10));
}

function clearAll() {

    total = 0;
    enterNumber = "";
    printNumber(total);
}

function checkLimitNumber() {
    if (enterNumber.length > 14) {
        console.log("limit out");
        return true;
    }
}

function removeNumberLast() {
    if (enterNumber.length === 0) {
        return 0;
    }

    if (enterNumber.length === 1) {
        var str = enterNumber;
        str = str.slice(0, -1);
        enterNumber = str;
        printNumber(0);

    } else {

        var str = enterNumber;
        str = str.slice(0, -1);
        enterNumber = str;
        printNumber(str);
    }
}