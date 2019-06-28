/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto_ingrediente', {
    producto_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producto',
        key: 'prod_id'
      }
    },
    ingrediente_ingr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ingrediente',
        key: 'ingr_id'
      }
    },
    prodingr_cantidad: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'producto_ingrediente'
  });
};
