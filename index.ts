#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

async function main(){ 
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'what do you want to do?',
            choices: [
                chalk.blue('Html'),
                chalk.red('Css'),
                chalk.yellow('Java'),
                chalk.white('Exit') 
      ]
        }
    ]);

    switch(choice){
        case chalk.red('option 1'):
        console.log(chalk.yellow('you chose option 1.'));
        break;
        case chalk.red('option 2'):
        console.log(chalk.yellow('you chose option 2.'));
        break;
        case chalk.yellow('Exit'):
        console.log(chalk.red('Good bye!'));
        process.exit(0);

        default:
        console.log(chalk.red('Invalid value'));
        break;
    }

}
main();










