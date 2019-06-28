'use strict'

import { readdirSync } from 'fs'
import { basename as _basename, join } from 'path'
import Sequelize, { Op } from 'sequelize'
import configJson from '../../config'

const basename = _basename(__filename)
const env = process.env.NODE_ENV || 'development'

const db = {}
const config = configJson[env]

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = sequelize['import'](join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

/* db.personanatural.belongsTo(db.personageneral, { foreignKey: 'pege_id', as: 'pege' })
db.personageneral.hasOne(db.personanatural, { foreignKey: 'pege_id', as: 'pena' })
db.personajuridica.belongsTo(db.personageneral, { foreignKey: 'pege_id', as: 'pege' })
db.personageneral.hasOne(db.personajuridica, { foreignKey: 'pege_id', as: 'peju' })
db.personageneral.belongsTo(db.tipodocumento, { foreignKey: 'tido_id', as: 'tido' })
db.personageneral.belongsTo(db.ciudad, { foreignKey: 'ciud_id', as: 'ciud' })
db.personanatural.belongsTo(db.operador, { foreignKey: 'pege_id', as: 'oper' })
db.operador.hasOne(db.personanatural, { foreignKey: 'pege_id', as: 'pena' })
db.ciudad.belongsTo(db.departamento, { foreignKey: 'depa_id', as: 'depa' })
db.departamento.hasMany(db.ciudad, { foreignKey: 'depa_id', as: 'ciud' })
db.departamento.belongsTo(db.pais, { foreignKey: 'pais_id', as: 'pais' })
db.pais.hasMany(db.departamento, { foreignKey: 'pais_id', as: 'depa' })
db.vehiculo.hasOne(db.tipovehiculo, { foreignKey: 'tive_id', as: 'tive' })
db.tipovehiculo.hasMany(db.vehiculo, { foreignKey: 'tive_id', as: 'vehi' })
db.rol.belongsToMany(db.usuario, {
  through: {
    model: db.usuariorol,
    unique: false
  },
  foreignKey: 'rol_id',
  as: 'usuario'
})
db.rol.belongsToMany(db.funcionalidad, {
  through: {
    model: db.funcionalidadrol,
    unique: false
  },
  foreignKey: 'rol_id',
  as: 'funcionalidad'
})
db.funcionalidad.belongsTo(db.funcionalidad, { foreignKey: 'func_idfuncionalidadpadre', as: 'padre' })
db.funcionalidad.hasMany(db.funcionalidad, { foreignKey: 'func_idfuncionalidadpadre', as: 'hijas' }) */

/* db.slot.belongsTo(db.nivel, { foreignKey: 'resp_id', as: 'nivel' });
db.nivel.hasOne(db.slot, { foreignKey: 'resp_id', as: 'nivel' }); */

/*
db.circular.belongsTo(db.area, { foreignKey: 'area_id', as: 'area' });
db.area.hasOne(db.circular, { foreignKey: 'area_id', as: 'area' });
db.circular.belongsTo(db.responsable, { foreignKey: 'resp_id', as: 'responsable' });
db.responsable.hasOne(db.circular, { foreignKey: 'resp_id', as: 'responsable' });
db.circular.belongsTo(db.entidad, { foreignKey: 'enti_id', as: 'entidad' });
db.entidad.hasOne(db.circular, { foreignKey: 'enti_id', as: 'entidad' });
db.almacenar.belongsTo(db.circular, { foreignKey: 'circ_id', as: 'circular' });
db.circular.hasOne(db.almacenar, { foreignKey: 'circ_id', as: 'circular' });
db.usuario.belongsToMany(db.rol, {
  through: {
    model: db.usuariorol,
    unique: false
  }, foreignKey: 'usua_id', as: 'rol'
});
db.rol.belongsToMany(db.usuario, {
  through: {
    model: db.usuariorol,
    unique: false
  }, foreignKey: 'rol_id', as: 'usuario'
});
db.rol.belongsToMany(db.funcionalidad, {
  through: {
    model: db.rolfuncionalidad,
    unique: false
  }, foreignKey: 'rol_id', as: 'funcionalidad'
});
db.funcionalidad.belongsToMany(db.rol, {
  through: {
    model: db.rolfuncionalidad,
    unique: false
  }, foreignKey: 'func_id', as: 'rol'
});
db.funcionalidad.belongsTo(db.funcionalidad, { foreignKey: 'func_padre', as: 'padre' });
db.funcionalidad.hasMany(db.funcionalidad, { foreignKey: 'func_padre', as: 'hijas' });
*/

db.sequelize = sequelize
db.Op = Op

export default db