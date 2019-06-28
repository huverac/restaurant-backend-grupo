/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('libro', {
    lb_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lb_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lb_isbn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lb_ejemplares: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'libro'
  });
};
