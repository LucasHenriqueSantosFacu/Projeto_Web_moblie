const express = require("express");
const router = express.Router();
exports.router = router;
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
exports.app = app;
const bd = require('../../src/dao/db');
const Usuario = require('../../src/models/usuario');
const UsuarioController = require('../../src/controller/usuario_controller');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(UsuarioController);

app.listen(3306, () => {
    console.log("Servidor rodando")
});

function logar() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    console.log(JSON.stringify({
        email: email,
        password: password
    }));

    fetch("login", {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: { "content-type": "application/json" }
    })

        .then(async (resp) => {
            var status = await resp.text();
            console.log(status)
            if (status == 'conectado') {
                location.href = '../html/home.html'
            } else {
                alert('Email ou Senha incorretos')
            }
        })
}