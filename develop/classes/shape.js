

const createShapeXML = (shape, color) => {
    if(shape === 'triangle'){
        return `<polygon points="150,10 45,180 245,180" fill="${color}" />`
    }else if(shape === 'circle'){
        return `<circle cx="150" cy="110" r="80" fill="${color}" />`
    }else {
        return `<rect width="150" height="150" x="75" y="35" fill="${color}" />`
    }
}

module.exports = { createShapeXML }