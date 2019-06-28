/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocion', {
    prom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prom_fechainicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    prom_fechafinal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipopromocion',
        key: 'tipo_id'
      }
    }
  }, {
    tableName: 'promocion'
  });
};
