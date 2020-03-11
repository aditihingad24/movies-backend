const express = require('express');
const Director = require('../models/Director')

const controller = async (req, res) => {
    const directors = await Director.find();
    console.log(directors)
    res.render('directors',{directors: directors})
}
module.exports= controller;