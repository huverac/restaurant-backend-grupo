/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona', {
    pers_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pers_cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    pers_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pers_apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pers_direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pers_telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pers_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'persona',schema: 'general'
  });
};
  