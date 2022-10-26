"use strict";
const calculator = () => {
    let num1 = Number(prompt("Enter the first number : "));
    let num2 = Number(prompt("Enter the second number : "));
    let operation = prompt("Choose operation from : + - / * : ");
    if (operation == "+") {
        return num1 + num2;
    }
    else if (operation == "-") {
        return num1 - num2;
    }
    else if (operation == "*") {
        return num1 * num2;
    }
    else if (operation == "/") {
        return num1 / num2;
    }
    else {
        console.log("Stop joking around. ");
        return undefined;
    }
};
console.log(calculator());
