/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesa', {
    mesa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mesa_ubicacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mesa_observaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mesa_estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mesa'
  });
};
