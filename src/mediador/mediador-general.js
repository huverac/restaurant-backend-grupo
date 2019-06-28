
import Sequelize from 'sequelize'

import models from '../database/models/general'

const Op = Sequelize.Op

/* export const insertar_rol= async function(){
 let t=null
     try {
         t= await models.sequelize.transaction()
         const rol={
         rol_id:2,
         rol_nombre:'GERENTE',
         rol_descrip:'GERENTE'
         }
         const done= await models.rol.create(rol, {transaction:t})
         if(!done){
             t.rollback()
             return false
         }
         t.commit()
     } catch (error) {
         if(t){
            t.rollback()
         }
         console.log(error)
     }
     return true
} */

export const listarlibros = async ()=>{
 //  const t= models.Sequelize.transaction()
    try {
        const listalibros = await models.libro.findAll()
        return listalibros.map(libro=>({
            librId:libro.lb_id,
            librNombre: libro.lb_nombre,
            librIsbn:libro.lb_isbn,
            librCantejemplares:libro.lb_ejemplares
        }))
     } catch (error) {
        console.log(error)
    } 

    return []
}
export const listaringredientes = async ()=>{
       try {
           const listaringredientes = await  models.ingrediente.findAll()
           return listaringredientes.map(ingrediente=>({
            ingrId:ingrediente.ingr_id,
            ingrNombre: ingrediente.ingr_nombre,
            ingrObservaciones:ingrediente.ingr_observaciones,
            ingrExistentes:ingrediente.ingr_existente,
            ingrMinimo:ingrediente.ingr_minimo
           }))
        } catch (error) {
           console.log(error)
       } 
   
       return []
   }
export const registrarlibros = async (libros)=>{
    const t = await models.sequelize.transaction()
    try {
        let libro = {
            lb_id:libros.librId,
            lb_nombre: libros.librNombre,
            lb_isbn:libros.librIsbn,
            lb_ejemplares:libros.librCantejemplares
        }
        
    const libroCreated= await models.libro.create(libro, { transaction:t })
    
    if(!libroCreated){
        t.rollback()
        libros.error='Error registrando el libro'
        return false
    }
    t.commit()
    return true
    
    } catch (error) {
        t.rollback()
        console.log(error)     
    }
    return false

}

export const eliminarLibro= async(libros)=>{
    const t= await models.sequelize.transaction()
    try{
        const rowsDeleted= await models.libro.destroy({
            where:{
                lb_id: libros.librId
            },
            transaction:t
        })
        if(rowsDeleted!==1){
            libros.error='Error eliminando el libro'
            t.rollback()

            return false
        }
        t.commit()
        return true
    }catch(error){
        console.log(error)
        t.rollback()
    }
    return false
}

export const modificarLibro=async(libros)=>{
    const t= await models.sequelize.transaction()
    try {
        let libro = {
            lb_id:libros.librId,
            lb_nombre: libros.librNombre,
            lb_isbn:libros.librIsbn,
            lb_ejemplares:libros.librCantejemplares
        }
        const libroafectado= await models.libro.update(libro,{
            where:{
                lb_id:libro.lb_id
            },
            transaction:t
        })
        if(libroafectado!==1){
            libros.error='Ocurrió un error actualizando los datos del libro'
            t.rollback()
            return false
        }
        t.commit()
        return true
    } catch (error) {
        console.log(error)
        t.rollback()
    }
    return false
}

export const registrarcuenta = async(personaN, id)=>{
  const t = await models.sequelize.transaction()
    try {
      let cuenta = {
        cuen_username: personaN.usernamePersona,
        cuen_password: personaN.passwordPersona,
        pers_id: id,
        cuen_estado: true
      }
      const cuentaCreated= await models.cuenta.create(cuenta,{transaction: t})
        if(!cuentaCreated){
          t.rollback()
          return false
        }
    t.commit()    
    return true
    } catch (error) {
      t.rollback()
      console.log(error)     
    }
    return false
}

export const registrarpersona = async (personaN)=>{
    const t = await models.sequelize.transaction()
    try {
        let persona = {
            pers_cedula:personaN.cedulaPersona,
            pers_nombre: personaN.nombresPersona,
            pers_apellido:personaN.apellidosPersona,
            pers_direccion:personaN.direccionPersona,
            pers_telefono: personaN.telefonoPersona,
            pers_email: personaN.emailPersona
        }
    const personaCreated= await models.persona.create(persona, { transaction:t })
    if(!personaCreated){
        t.rollback()
        personaN.error='Error registrando la persona'
        return false
    }
    t.commit()
    if(personaCreated){
      registrarcuenta(personaN, personaCreated.pers_id)
    }
    return true
    } catch (error) {
      t.rollback()
      console.log(error)     
    }
    return false
}


export const mofiLibros=async(Libros)=>{

}