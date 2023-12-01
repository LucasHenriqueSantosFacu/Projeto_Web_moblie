const http = Request('http')
const path = require('path')

const express = require('express')
const fs = require("fs");
var session = require('express-session')

const app = express()
const server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded());
app.use(session({ secret: "abc" }));

//configurações
app.set('port', process.env.PORT || 3306)

//secção de login
app.use('../../html', (req, res, next) => {
    if (req.session.email) {
        next();
    } else {
        res.redirect('../../../index.html')
    }
});

app.use(express.static(path.join(__dirname, 'site')))

//start do server
server.listen(app.get('port'), () => {
    console.log('server na porta', app.get('port'))
})

//login do front para o back

app.post('/login', (rep, res) => {
    const usuariocad = fs.readFileSync('../models/usuario.js')
    const usuarioparse = JSON.parse(usuariocad)

    var email = req.body.email
    var password = req.body.password

    for (var umUsuario of usuarioparse) {
        if (email == umUsuario.email && password == umUsuario) {
            rep.session.email == umUsuario
            res.send('conectado')
            return
        }
    }
    res.send('falhou')
})