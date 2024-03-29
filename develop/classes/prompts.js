const inquirer = require('inquirer')
const { createSVG } = require('./svg.js')
const { createShapeXML } = require('./shape.js')
const { writeFile } = require('fs/promises')
const { join } = require('path')


class Prompts {

    constructor(){
        this.svg = ''
        this.shapeXML = ''
    }

    run() {
        //run prompts
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
                    message: 'What color would you like your shape to be?'
                }
            ])
            .then((data) => {
                //run functions to create svg
                this.shapeXML = createShapeXML(data.shape, data.shapeColor)
                this.svg = createSVG(data.textColor, data.inputText, this.shapeXML)
                
            })
            .then(() => {
                //create the output file
                return writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'),
                    this.svg
                )
            })
            //confirmation message
            .then(() => console.log('Created logo.svg!'))
    }
}

module.exports = Prompts