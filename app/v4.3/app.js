const express = require('express');
const app = express();
const fs = require('fs');

var gzd = new Object();

fs.readFile('data/gamezone.xml', 'utf8', function(err, data){

  if(err) {
    console.error("ERROR");
  }

  console.log("OK");
  gzd = data;
  console.log(gzd);
});




app.set('view engine', 'ejs')

app.get('/home', function (req, res) {
    res.render('home',{jogos:gzd});
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
    res.render('home',{jogos:gzd});
})

app.listen(8080, () => {
    console.log('A OUVIR NO PORTO 8080')
})
