/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuenta', {
    pers_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persona',
        key: 'pers_id'
      }
    },
    cuen_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cuen_username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cuen_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuen_estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'cuenta', schema: 'general'
  });
};
