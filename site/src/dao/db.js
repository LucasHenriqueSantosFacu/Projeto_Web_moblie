const Sequelize = require("sequelize");
const { app, router } = require("../../assets/js");

const sequelize = new Sequelize("maisSaude", "root", {
    dialect: 'mysql', host: 'localhost'
});

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function(){
    console.log("Erro na conexão");
});

module.exports = sequelize;
app.use(router);
