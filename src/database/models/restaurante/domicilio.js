/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('domicilio', {
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
      references: {
        model: 'pedido',
        key: 'ped_id'
      }
    },
    dom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dom_fechaentrega: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dom_estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'domicilio'
  });
};
