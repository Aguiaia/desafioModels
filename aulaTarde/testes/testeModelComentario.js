const { sequelize, Comentario, Usuario } = require('../models');

Comentario.findAll({include:['post', 'usuario']}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)