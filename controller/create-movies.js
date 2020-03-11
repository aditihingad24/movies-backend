const Movie = require('../models/Movie');
const express = require('express')

const controller = async (req,res)=>{
    const {body} = req;
    const movie = await Movie.create({
        name: body.name,
        description:body.description,
        yearOfRelease :body.yearOfRelease,
        director: body.director
    });
    res.send(movie);
}

module.exports = controller;