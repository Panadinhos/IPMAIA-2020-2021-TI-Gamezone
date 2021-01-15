const express = require('express');
const app = express();

const mongoose = require('mongoose');


app.set('view engine', 'ejs')

app.get('/home', function (req, res) {
    res.render('home');
    })

app.get('/jogos', function (req, res) {
    res.render('jogos');
})

app.get('/perifericos', function (req, res) {
    res.render('perifericos');
})

app.get('/descontos', function (req, res) {
    res.render('descontos');
})

app.get('*', function (req, res) {
    res.render('home')
})

app.listen(8080, () => {
    console.log('A OUVIR NO PORTO 8080')
})
