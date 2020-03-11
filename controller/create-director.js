const Director = require('../models/Director');
const express = require('express')

const controller = async (req,res)=>{
    const {body} = req;
    const director = await Director.create({
        name:body.name,
        about:body.about,
        avatarUrl:body.avatarUrl,
        email:body.email
    });
    res.send(director);
}

module.exports = controller;