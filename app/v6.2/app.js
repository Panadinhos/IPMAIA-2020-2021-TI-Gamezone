const express = require('express');
const app = express();
const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ attrkey: "ATTR" });
//var gzdxml = new Object();

var stringgg = fs.readFileSync('data/gamezone.xml', 'utf-8')
parser.parseString(stringgg, (err, d) => {
  if (err === null) {
    console.log(d);

  } else {
    console.log(err)
  }

  console.log("OK");
  //gzdxml = data;
  //console.log(gzdxml);
});

//const xml2js = require('xml2js');


// parser.parseStringPromise(gzdxml).then(function (result) {
//   console.dir(result);
//   console.log('Done');
// })
// .catch(function (err) {
//   // Failed
// });


// app.set('view engine', 'ejs')


// app.get('/jogos', function (req, res) {
//     res.render('jogos');
// })

// app.get('/perifericos', function (req, res) {
//     res.render('perifericos');
// })

// app.get('/descontos', function (req, res) {
//     res.render('descontos');
// })

// app.get('/plat', function (req, res) {
//   res.render('plat');
// })

// app.get('/criadores', function (req, res) {
//   res.render('criadores');
// })

// app.get('/eventos', function (req, res) {
//   res.render('eventos');
// })

// app.get('*', function (req, res) {
//     res.render('jogos');
// })

// app.listen(8080, () => {
//     console.log('A OUVIR NO PORTO 8080')
// })
