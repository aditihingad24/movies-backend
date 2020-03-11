const express = require('express');
const Movie = require('../models/Movie')

const controller = async (req, res) => {
    const movies = await Movie.find().populate('director');
    console.log(movies)
    res.render('movies',{movies: movies})
}
module.exports= controller;