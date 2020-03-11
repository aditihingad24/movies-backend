const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();
const port = 3010;

mongoose.connect('mongodb://localhost:27017/movies', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});


app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)







app.listen(port , ()=>{console.log(`server started at ${port}`)})