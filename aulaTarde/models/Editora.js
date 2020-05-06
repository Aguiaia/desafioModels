let Editora = (sequelize, DataTypes) => {
    let editora  = sequelize.define(
        'Editora',
        {
            id_editora: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tableName: "editora",
            timestamps: false
        }

    );
    editora.associate = (models) => {
        editora.hasMany(models.Produto,{foreignKey:'fk_categoria', as:'produto'});
    }
    return editora
}

module.exports = Editora;