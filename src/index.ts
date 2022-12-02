#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const runAnimation = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};

async function welcome() {
    let animation = chalkAnimation.rainbow("Let's Start Calculation");
    await runAnimation();

    animation.stop();

    startAgain();
};

await welcome();

async function question() {

    const operators = await inquirer.prompt([
        {
            name: 'operator',
            type: 'list',
            message: 'Please Select your Operator \n',
            choices: [
                'Addition',
                'Subtraction',
                'Multiplication',
                'Division',
                'Power',
            ],
        },
        {
            name: 'number1',
            type: 'number',
            message: 'Enter Your Number 1',
            default() {
                return 0;
            },
        },
        {
            name: 'number2',
            type: 'number',
            message: 'Enter Your Number 2',
            default() {
                return 0;
            },
        },

    ]);

    return await calculation(operators.operator, operators.number1, operators.number2);
};

const calculation = async (isOperator: string, number1: number, number2: number) => {
    let result: number = 0;

    switch (isOperator) {
        case "Addition":
            result = number1 + number2;
            console.log(chalk.cyan(`Your Result ${number1} + ${number2} = ${result}`));
            break;
        case "Subtraction":
            result = number1 - number2;
            console.log(chalk.cyan(`Your Result ${number1} - ${number2} = ${result}`));
            break;
        case "Multiplication":
            result = number1 * number2;
            console.log(chalk.cyan(`Your Result ${number1} * ${number2} = ${result}`));
            break;
        case "Division":
            result = number1 / number2;
            console.log(chalk.cyan(`Your Result ${number1} / ${number2} = ${result}`));
            break;
        case "Power":
            result = number1 ** number2;
            console.log(chalk.cyan(`Your Result ${number1} ** ${number2} = ${result}`));
            break;
        default:
            return;
    }
};

async function startAgain() {
    do {
        await question();

        var againCal = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want Continue ? Press y or n: "
        });
    } while (againCal.restart === 'y' || againCal.restart === 'Y' || againCal.restart === 'yes' || againCal.restart === 'Yes' || againCal.restart === 'YES');
};