// Este srcipt é o elementar, ou seja, com ele podemos iniciar o servidor com o comando "node app.js" e consultar no browser (por exemplo) o endereço "localhost:8080". Este request é é recebido e as respostas dele resultante sáo um texto na pagina (o h1) e uma mensagem na consola que confirma que o request foi recebido.

const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("O request foi recebido.")
    res.send("<h1>Já me lembro por onde  que se começava!!!</h1>")
})

app.listen(8080, () => {
    console.log("A OUVIR NO PORTO 8080")
})