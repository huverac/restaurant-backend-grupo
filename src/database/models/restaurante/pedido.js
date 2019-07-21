/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido', {
    pers_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persona',
        key: 'pers_id'
      }
    },
    ped_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ped_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ped_valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ped_descuento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ped_estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mesa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mesa',
        key: 'mesa_id'
      }
    }
  }, {
    tableName: 'pedido', schema: 'restaurante'
  });
};
