#! /usr/bin/env node
import inquirer from "inquirer";
// const randomNumber = Math.random();
// console.log(randomNumber);
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessednumber",
        type: "number",
        message: "please guess a number between 1-5:",
    },
]);
if (answer.UserGuessednumber === randomNumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("you guessed worng number");
}
