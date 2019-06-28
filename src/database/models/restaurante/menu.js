/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu', {
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    menu_fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'menu'
  });
};
