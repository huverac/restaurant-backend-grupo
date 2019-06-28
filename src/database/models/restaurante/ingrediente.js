/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingrediente', {
    ingr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ingr_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingr_observaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingr_existente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ingr_minimo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ingrediente',schema: 'restaurante'
  });
};
