const express = require('express');
const app = express();
const fs = require('fs');

var gzdxml = new Object();

fs.readFile('data/gamezone.xml', 'utf8', function(err, data){

  if(err) {
    console.error("ERROR");
  }

  console.log("OK");
  gzdxml = data;
  console.log(gzdxml);
});

const xml2js = require('xml2js');

var parser = new xml2js.Parser();
parser.parseStringPromise(gzdxml).then(function (result) {
  console.dir(result);
  console.log('Done');
})
.catch(function (err) {
  // Failed
});


app.set('view engine', 'ejs')

app.get('/home', function (req, res) {
    res.render('home',{jogos:gzdxml});
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
    res.render('home',{jogos:gzdxml});
})

app.listen(8080, () => {
    console.log('A OUVIR NO PORTO 8080')
})
