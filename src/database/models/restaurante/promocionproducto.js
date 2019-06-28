/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocionproducto', {
    prom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'promocion',
        key: 'prom_id'
      }
    },
    prom_contador: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'prod_id'
      }
    },
    promprod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'promocionproducto'
  });
};
