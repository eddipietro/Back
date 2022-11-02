require('dotenv').config()

const express = require('express')
const app = express()

const Productos = require('./storage/products');


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
    const productos = new Productos
    res.render('pages/index', {productos: productos.getProductos()})
});

app.post('/productos', (req, res) =>{
    const {name, url, price} = req.body;
    const productos = new Productos();
    productos.saveProducto({ name, url, price})
    res.redirect('/registro');

})




module.exports = app