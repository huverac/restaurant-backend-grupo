/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallepedido', {
    ped_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pedido',
        key: 'ped_id'
      }
    },
    detped_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prod_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_observ: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_descuento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'promocion',
        key: 'prom_id'
      }
    },
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'prod_id'
      }
    }
  }, {
    tableName: 'detallepedido'
  });
};
