const express = require("express");
const app = express();

app.get('/home', function (req, res) {
        res.send('<h1>HOME</h1>');
    })

app.get('/jogos', function (req, res) {
    res.send('<h1>Jogos</h1>');
})

app.get('/perifericos', function (req, res) {
    res.send('<h1>Periféricos</h1>');
})

app.get('/descontos', function (req, res) {
    res.send('<h1>Descontos</h1>');
})

app.get('*', function (req, res) {
    res.send('<h1>HOME</h1>')
})

app.listen(8080, () => {
    console.log('A OUVIR NO PORTO 8080')
})
