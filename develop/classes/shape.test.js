const { createShapeXML } = require('./shape.js')

describe('createShapeXML method', () => {
    it('should return a polygon xml string with a red fill if the input is triangle and red', () => {
        expect(createShapeXML('triangle', 'red')).toEqual('<polygon points="150,10 45,180 245,180" fill="red" />')
    })
})
describe('createShapeXML method', () => {
    it('should return a square xml string with a green fill if the input is square and green', () => {
        expect(createShapeXML('sqaure', 'green')).toEqual('<rect width="150" height="150" x="75" y="35" fill="green" />')
    })
})
describe('createShapeXML method', () => {
    it('should return a cricle xml string with a blue fill if the input is circle and blue', () => {
        expect(createShapeXML('circle', 'blue')).toEqual('<circle cx="150" cy="110" r="80" fill="blue" />')
    })
})