#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");


program.version("1.0.0").description("password generator");

program
  .option("-l , --length <number>", "length of password", "8")
  .option("-s , --save", "password saved to password.txt")
  .option("-nn , --no-numbers", "remove numbers")
  .option("-ns , --no-symbols", "remove symbols")
  .parse();

const { length, save, number, symbol } = program.opts();

//get generated Password
const generatedPassword = createPassword(length, number, symbol);

//save to file
if (save) {
  savePassword(generatedPassword);
}

//saving password to clipboard
clipboardy.writeSync(generatedPassword);

console.log(chalk.blue("generated password: ") + chalk.bold(generatedPassword));
console.log(chalk.yellow('password copied to clipboard'));