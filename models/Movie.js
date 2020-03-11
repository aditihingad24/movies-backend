const mongoose = require('mongoose');

const Director = require('./Director')

const movieSchema = new mongoose.Schema({
    name:{type:'string', required:true},
    description:{type: 'string'},
    yearOfRelease :{type:'number',required:true},
    director: {type: 'ObjectId',ref:Director}
})

const Movie = mongoose.model('Movie' ,movieSchema)

module.exports = Movie;