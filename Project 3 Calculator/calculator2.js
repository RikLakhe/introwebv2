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
            console.log(total);
            break;

        case "2":
            console.log(2);
            addToNumber(2);
            console.log(total);
            break;
        case "3":
            console.log(3);
            addToNumber(3);
            console.log(total);
            break;

        case "4":
            console.log(4);
            addToNumber(4);
            console.log(total);
            break;

        case "5":
            console.log(5);
            addToNumber(5);
            console.log(total);
            break;

        case "6":
            console.log(6);
            addToNumber(6);
            console.log(total);
            break;

        case "7":
            console.log(7);
            addToNumber(7);
            console.log(total);
            break;

        case "8":
            console.log(8);
            addToNumber(8);
            console.log(total);
            break;

        case "9":
            console.log(9);
            addToNumber(9);
            console.log(total);
            break;

        case "0":
            console.log(0);
            addToNumber(0);
            console.log(total);
            break;

        case "C":
            console.log("Clear");
            clearAll();
            console.log(total);
            break;

        case "+":
            console.log("plus");
            calculation();
            signFlag = "plus";
            break;

        case "-":
            console.log("minus");
            calculation();
            signFlag = "minus";
            break;
        case "X":
            console.log("multiply");
            calculation();
            signFlag = "multiply";
            break;
        case "÷":
            console.log("divide");
            calculation();
            signFlag = "divide";
            break;
        case "←":
            console.log("delete");
            removeNumberLast();
            break;
        case "=":
            console.log("equal");
            calculation();
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
    signFlag = "";
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

function calculation() {
    switch (signFlag) {
        case "":
            total = parseInt(enterNumber, 10);
            console.log(total);
            printNumber(0);
            enterNumber = 0;
            break;
        case "plus":
            total = total + parseInt(enterNumber, 10);
            console.log(total);
            printNumber(total);
            enterNumber = 0;
            break;
        case "minus":
            total = total - parseInt(enterNumber, 10);
            console.log(total);
            printNumber(total);
            enterNumber = 0;
            break;
        case "multiply":
            total = total * parseInt(enterNumber, 10);
            console.log(total);
            printNumber(total);
            enterNumber = 0;
            break;
        case "divide":
            if (enterNumber === "0") {
                return 0;
            } else {
                total = total / parseInt(enterNumber, 10);
                console.log(total);
                printNumber(total);
                enterNumber = 0;
            }
            break;
        case "equal":
            printNumber(total);
            clearAll();
            break;

        default:
            break;
    }
}