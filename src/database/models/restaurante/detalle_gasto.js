/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle_gasto', {
    detgast_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gast_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gasto',
        key: 'gast_id'
      }
    },
    ingr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ingrediente',
        key: 'ingr_id'
      }
    },
    detgast_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    detgast_valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'detalle_gasto'
  });
};
