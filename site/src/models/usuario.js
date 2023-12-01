const Sequelize = require('sequelize');
const db = require('../dao/db');

const Usuario = db.define(
    'Usuario',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        }
});

Usuario.sync();

module.exports = Usuario;