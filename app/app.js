const express = require('express');
const app = express();
const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

var stringgg = fs.readFileSync('data/gamezone.xml', 'utf-8')
parser.parseString(stringgg, (err, d) => {
  if (err === null) {
    console.log(d["gamezone"]["games"][0]["game"][0]["title"][0]);

    app.set('view engine', 'ejs')

    app.use(express.static(__dirname + '/'))

    app.get('/jogos/:nome', function (req, res) {
        res.render('jogo',{data:d["gamezone"]["games"][0]["game"],nome:req.params.nome});
    })

    app.get('/jogos', function (req, res) {
        res.render('jogos',{data:d["gamezone"]["games"][0]["game"]});
    })

    app.get('/perifericos', function (req, res) {
        res.render('perifericos',{data:d["gamezone"]["peripherals"][0]});
    })

    app.get('/plat', function (req, res) {
      res.render('plat',{data:d});
    })

    app.get('/criadores', function (req, res) {
      res.render('criadores',{data:d});
    })

    app.get('/eventos', function (req, res) {
      res.render('eventos',{data:d});
    })

    app.get('*', function (req, res) {
        res.render('jogos',{data:d["gamezone"]["games"][0]["game"]});
    })

  } else {
    console.log(err)
  }
  console.log("OK");
});




app.listen(8080, () => {
    console.log('A OUVIR NO PORTO 8080')
})
