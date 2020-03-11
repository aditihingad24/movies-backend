const mongoose = require('mongoose');


const directorSchema = new mongoose.Schema({
    name:{type:'string', required:true},
    about:{type: 'string'},
    avatarUrl:{type:'string'},
    email:{type:'string',required:true}
})

const Director = mongoose.model('Director' ,directorSchema)

module.exports = Director;