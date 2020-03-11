const express = require('express');

const router = express.Router();

const getMovies = require('./controller/get-movies');
const createMovies = require('./controller/create-movies');
const createDirector = require('./controller/create-director');
const getAuthors = require('./controller/get-directors');


router.get('/',(req ,res)=>{res.send('hello world')})

router.get('/movies', getMovies);
router.get('/directors', getAuthors);

router.post('/movie', createMovies);

router.post('/director', createDirector);




module.exports = router;