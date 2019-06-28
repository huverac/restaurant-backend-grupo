/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personarol', {
    rol_rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rol',
        key: 'rol_id'
      }
    },
    persona_pers_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persona',
        key: 'pers_id'
      }
    }
  }, {
    tableName: 'personarol'
  });
};
