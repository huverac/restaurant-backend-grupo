/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('funcionalidad', {
    func_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    func_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    func_descrip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    func_icono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    func_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    func_orden: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    func_tipo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    func_idpadre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    func_fechacambio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    func_registradopor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'funcionalidad'
  });
};
