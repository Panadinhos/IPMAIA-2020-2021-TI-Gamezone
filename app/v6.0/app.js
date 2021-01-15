const express = require('express');
const app = express();
const fs = require('fs');

var gzdxmlstr = fs.readFileSync('data/gamezone.xml', 'utf8');

const xml2js = require('xml2js');
const parser = new xml2js.Parser();
parser.parseString(gzdxmlstr, (err,data) => {
  if (err===null) {
    console.dir(data);
    var gzdxml=data;
    console.log('Done');
    console.log(gzdxml);
  } else {
    console.log(err)
  };
});


app.set('view engine', 'ejs')


app.get('/jogos', function (req, res) {
    res.render('jogos');
})

app.get('/perifericos', function (req, res) {
    res.render('perifericos');
})

app.get('/descontos', function (req, res) {
    res.render('descontos');
})

app.get('/plat', function (req, res) {
  res.render('plat');
})

app.get('/criadores', function (req, res) {
  res.render('criadores');
})

app.get('/eventos', function (req, res) {
  res.render('eventos');
})

app.get('*', function (req, res) {
    res.render('jogos',{jogos:gzdxml});
})

app.listen(8080, () => {
    console.log('A OUVIR NO PORTO 8080')
})
