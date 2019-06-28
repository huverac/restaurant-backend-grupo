/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolfuncionalidad', {
    rol_rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rol',
        key: 'rol_id'
      }
    },
    funcionalidad_func_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'funcionalidad',
        key: 'func_id'
      }
    }
  }, {
    tableName: 'rolfuncionalidad'
  });
};
