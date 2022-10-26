const calculator = (): number | undefined => {

    let num1: number = Number(prompt("Enter the first number : "));
    let num2: number = Number(prompt("Enter the second number : "));

    let operation: string | null = prompt("Choose operation from : + - / * : ")

    if (operation == "+") {
        return num1 + num2;
    } else if (operation == "-") {
        return num1 - num2;
    } else if (operation == "*") {
        return num1 * num2;
    } else if (operation == "/") {
        return num1 / num2;
    } else {
        console.log("Stop joking around. ");
        return undefined
    }
}

console.log(calculator());