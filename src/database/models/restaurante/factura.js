/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factura', {
    pago_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pago',
        key: 'pago_id'
      }
    },
    fact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fact_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fact_estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'factura'
  });
};
