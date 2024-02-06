// class SVG {
//     constructor(data){
//         this.inputText = data.inputText
//         this.textColor = data.textColor
//         this.shape = data.shape
//         this.shapeColor = data.shapeColor
//         this.svg = ''
//     }

//     printText(){
//         console.log(this.inputText)
//     }
// }

// module.exports = SVG

const createSVG = (data, shape) => {
    console.log(shape)
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape}
    
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.inputText}</text>
    
    </svg>`
}

module.exports = { createSVG }

// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="110" r="80" fill="red" />
// <rect width="150" height="150" x="75" y="35" fill="blue" />
// <polygon points="150,10 45,180 245,180" fill="blue" /> 

// <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">SVG</text>

// </svg>`