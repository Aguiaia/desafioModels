let Pedido = (sequelize, DataTypes) => {
    let pedido  = sequelize.define(
        'Pedido',
        {
            id_pedido: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },{
            tableName: "pedido",
            timestamps: false
        }

    );
    pedido.associate = (models) => {
        pedido.belongsTo(models.Usuario,{foreignKey:'fk_usuario', as:'usuario'});
        usuario.hasMany(models.Pedido,{foreignKey:'fk_usuario', as:'pedido'});
    }
    return usuario
}

module.exports = Usuario;