#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

console.log(chalkAnimation.rainbow("Let's Start"));

let input1 = await inquirer.prompt([{
    name: "number1",
    type: "number",
    message: "Enter your Number 1:"
}
]);

let input2 = await inquirer.prompt([{
    name: "number2",
    type: "number",
    message: "Enter your Number 2:"
}
]);

let operator = await inquirer.prompt([{
    name: "number1",
    type: "number",
    message: "Enter your Number 1:"
}
]);