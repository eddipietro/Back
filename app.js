require('dotenv').config()

const express = require('express')
const app = express()

const Persons = require('./src/services/persons.service');

const logger = require('morgan')

const router = require('./src/routes/index')
const errorHandler = require('./src/middlewares/errorHandler')

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/health', (_req, res) =>{
    res.status(200).json({
        success: true,
        enviroment: process.env.ENVIROMENT || 'undefined',
        health: 'Up'
    });
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', async(_req, res) => {
    res.status(200).json({
        env: process.env.ENVIROMENT || undefined,
        port: process.env.PORT || 8000
    })
})
app.use('/api', router)
app.use(errorHandler)
app.use(logger('dev'))

//get de pug, puse "/html" porque "/" ya esta en uso
app.get('/registro', (_req, res) => {
    const persons = new Persons
    res.render('pages/index', {persons: persons.getPersons()})
});

app.post('/personas', (req, res) =>{
    const {name, lastname, age} = req.body;
    const persons = new Persons();
    persons.savePerson({ name, lastname, age})
    res.redirect('/registro');

})




module.exports = app