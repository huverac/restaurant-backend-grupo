/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prod_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_ingredientes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_valorunit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'producto'
  });
};
