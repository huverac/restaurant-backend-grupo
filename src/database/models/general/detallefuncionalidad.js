/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallefuncionalidad', {
    func_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'funcionalidad',
        key: 'func_id'
      }
    },
    det_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    det_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    det_descrip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    det_icono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    det_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'detallefuncionalidad'
  });
};
