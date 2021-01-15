const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/home', function (req, res) {
    res.render('home.ejs');
    })

app.get('/jogos', function (req, res) {
    res.render('jogos.ejs');
})

app.get('/perifericos', function (req, res) {
    res.render('perifericos.ejs');
})

app.get('/descontos', function (req, res) {
    res.render('descontos.ejs');
})

app.get('*', function (req, res) {
    res.render('home.ejs')
})

app.listen(8080, () => {
    console.log('A OUVIR NO PORTO 8080')
})
