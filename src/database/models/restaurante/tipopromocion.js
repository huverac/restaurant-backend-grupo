/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipopromocion', {
    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_valordesc: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'tipopromocion'
  });
};
