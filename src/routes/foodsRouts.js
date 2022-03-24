const foodsRouts = require('express').Router();
const foodsControls=require('../controls/foodsControls')


foodsRouts.get('/', foodsControls.getAll)
foodsRouts.post('/', foodsControls.postData)
foodsRouts.put('/:id', foodsControls.editData)
foodsRouts.delete('/:id', foodsControls.delete)

module.exports = foodsRouts