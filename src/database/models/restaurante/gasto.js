/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gasto', {
    gast_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gast_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    gast_anexo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gast_valortotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'gasto'
  });
};
