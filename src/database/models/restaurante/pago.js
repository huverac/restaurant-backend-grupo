/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pago', {
    ped_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pedido',
        key: 'ped_id'
      }
    },
    pago_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pago_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pago_valorentregado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'pago'
  });
};
