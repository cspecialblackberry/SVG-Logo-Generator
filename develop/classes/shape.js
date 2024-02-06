

const createShapeXML = (data) => {
    if(data.shape === 'triangle'){
        return `<polygon points="150,10 45,180 245,180" fill="${data.shapeColor}" /> `
    }else if(data.shape === 'circle'){
        return ` <circle cx="150" cy="110" r="80" fill="${data.shapeColor}" />`
    }else {
        return `<rect width="150" height="150" x="75" y="35" fill="${data.shapeColor}" />`
    }
}

module.exports = { createShapeXML }