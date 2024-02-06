const inquirer = require('inquirer')
const SVG = require('./svg.js')

const svg = new SVG

class Prompts {
    run() {
        console.log('hi')
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'inputText',
                    message: 'Enter up to three characters for your logo.'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your text to be?'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Which shape would you like?',
                    choices: ['circle', 'triangle', 'square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like yout shape to be?'
                }
            ])
            .then((data) => {
                console.log(data)
                svg.printText(data)
            })
    }
}

module.exports = Prompts