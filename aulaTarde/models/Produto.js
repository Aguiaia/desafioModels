let Produto = (sequelize, DataTypes) => {
    let produto  = sequelize.define(
        'Produto',
        {
            id_produto: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            preco: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            fk_categoria: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            imagem: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_editora: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },{
            tableName: "produto",
            timestamps: false
        }

    );
    produto.associate = (models) => {
        produto.belongsTo(models.Categoria,{foreignKey:'fk_categoria', as:'categoria'});
        produto.belongsTo(models.Editora,{foreignKey:'fk_editora', as:'editora'});
    }
    return produto
}

module.exports = Produto;