
import Sequelize from 'sequelize'

import models from '../database/models/restaurante'
import models2 from '../database/models/general' 
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
export const registraringredientes=async(ingredientes)=>{
    const t= await models.sequelize.transaction()
    try {
        let ingrediente ={
            ingr_id:ingredientes.ingrId,
            ingr_nombre:ingredientes.ingrNombre,
            ingr_observaciones:ingredientes.ingrObservaciones,
            ingr_existente:ingredientes.ingrExistentes,
            ingr_minimo:ingredientes.ingrMinimo
        }
        const ingredienteCreated=await models.ingrediente.create(ingrediente,{transaction: t})
        if(!ingredienteCreated){
            t.rollback()
            ingredientes.error='Error registrando el ingrediente'
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
export const eliminaringredientes= async(ingredientes)=>{
    const t= await models.sequelize.transaction()
    try {
        const rowsDeleted=await models.ingrediente.destroy({
            where:{
                ingr_id:ingredientes.ingrId
            },
            transaction:t
        })
        if(rowsDeleted!==1){ 
            ingredientes.error='Error eliminando ingrediente'
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
export const modificaringrediente=async(ingredientes)=>{
    const t= await models.sequelize.transaction()
    try {
        console.log(ingredientes.ingrId)
        
        let ingrediente ={
            ingr_id:ingredientes.ingrId,
            ingr_nombre:ingredientes.ingrNombre,
            ingr_observaciones:ingredientes.ingrObservaciones,
            ingr_existente:ingredientes.ingrExistentes,
            ingr_minimo:ingredientes.ingrMinimo
        }
        const ingredienteafectado= await models.ingrediente.update(ingrediente,{
            where:{
                ingr_id: ingredientes.ingrId
            },
            transaction:t
        })
        if(ingredienteafectado.length!==1){
            ingredientes.error='Ocurrió un error actualizando los datos de los ingredientes'
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
export const consultaringrediente = async (ingredientes)=>{
    try {
      const ingrediente=await models.ingrediente.findOne({
        where:{
          ingr_id: ingredientes.ingrId
        }
      })
      if(!ingrediente){
        return []
      }

      let ingredient={
        ingrId:ingrediente.ingr_id,
        ingrNombre: ingrediente.ingr_nombre,
        ingrObservaciones:ingrediente.ingr_observaciones,
        ingrExistentes:ingrediente.ingr_existente,
        ingrMinimo:ingrediente.ingr_minimo
      }
     // return Object.entries(libron)
       return  [ingredient]
    
        
      
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
//PERSONA
export const listarpersonas = async ()=>{
    try {
        const listarpersonas = await  models2.persona.findAll()
        return listarpersonas.map(persona=>({
         ingrId:persona.pers_id,
         ingrCedula: persona.pers_cedula,
         ingrNombre:persona.pers_nombre,
         ingrApellido:persona.pers_apellido,
         ingrDireccion:persona.pers_direccion,
         ingrTelefono:persona.pers_telefono,
         ingrEmail:persona.pers_email,
        }))
     } catch (error) {
        console.log(error)
    } 

    return []
}

export const registrarcuenta = async(personaN, id)=>{
    const t = await models2.sequelize.transaction()
      try {
        let cuenta = {
          cuen_username: personaN.usernamePersona,
          cuen_password: personaN.passwordPersona,
          pers_id: id,
          cuen_estado: true
        }
        const cuentaCreated= await models2.cuenta.create(cuenta,{transaction: t})
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
  
  export const registrarpersonacuenta = async (personaN)=>{
      console.log('LLEGA A REGISTRAR PERSONA')
      const t = await models2.sequelize.transaction()
      try {
          let persona = {
              pers_cedula:personaN.cedulaPersona,
              pers_nombre: personaN.nombresPersona,
              pers_apellido:personaN.apellidosPersona,
              pers_direccion:personaN.direccionPersona,
              pers_telefono: personaN.telefonoPersona,
              pers_email: personaN.emailPersona
          }
      const personaCreated= await models2.persona.create(persona, { transaction:t })
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

export const registrarPersona=async(personas)=>{
    const t= await models2.sequelize.transaction()
    try {
        let persona ={
       //  pers_id: personas.ingrId,
         pers_cedula: personas.ingrCedula,
         pers_nombre: personas.ingrNombre,
         pers_apellido: personas.ingrApellido,
         pers_direccion: personas.ingrDireccion,
         pers_telefono: personas.ingrTelefono,
         pers_email: personas.ingrEmail
        }
        const personaCreated=await models2.persona.create(persona,{transaction: t})
        if(!personaCreated){
            t.rollback()
            persona.error='Error registrando el ingrediente'
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
export const eliminarPersona= async(personas)=>{
    const t= await models2.sequelize.transaction()
    try {
        const rowsDeleted=await models2.persona.destroy({
            where:{
                pers_cedula: personas.ingrCedula
            },
            transaction:t
        })
        if(rowsDeleted!==1){ 
            persona.error='Error eliminando ingrediente'
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

export const consultarPersona = async (personas)=>{
    try {
      const persona=await models2.persona.findOne({
        where:{
          pers_cedula: personas.ingrCedula
        }
      })
      if(!persona){
        return []
      }

      let person={
         ingrId:persona.pers_id,
         ingrCedula: persona.pers_cedula,
         ingrNombre:persona.pers_nombre,
         ingrApellido:persona.pers_apellido,
         ingrDireccion:persona.pers_direccion,
         ingrTelefono:persona.pers_telefono,
         ingrEmail:persona.pers_email
      }
     // return Object.entries(libron)
       return  [person]
    
        
      
    } catch (error) {
      console.log(error)
    }
    return []
  }

  export const modificarPersonas=async(personas)=>{
    const t= await models2.sequelize.transaction()
    try {
        
        
        let persona ={
            //pers_id: personas.ingrId,
            pers_cedula: personas.ingrCedula,
            pers_nombre: personas.ingrNombre,
            pers_apellido: personas.ingrApellido,
            pers_direccion: personas.ingrDireccion,
            pers_telefono: personas.ingrTelefono,
            pers_email: personas.ingrEmail
        }
        const personaAfectado= await models2.persona.update(persona,{
            where:{
                pers_id: personas.ingrId
            },
            transaction:t
        })
        if(personaAfectado.length!==1){
            personas.error='OcurriÛ un error actualizando los datos de los ingredientes'
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
//PEDIDDOS

export const listarPedidos = async ()=>{
    try {
        const listarpedidos = await  models.pedido.findAll()
        return listarpedidos.map(pedido=>({
         persId: pedido.pers_id,
         pedId: pedido.ped_id,
         pedFecha: pedido.ped_fecha,
         pedValor:pedido.ped_valor,
         pedDescuento:pedido.ped_descuento,
         idVendedor:pedido.id_vendedor,
         pedEstado:pedido.ped_estado,
         mesaId:pedido.mesa_id
        }))
     } catch (error) {
        console.log(error)
    } 

    return []
}


export const registrarpedidos=async(pedidos)=>{
    const t= await models.sequelize.transaction()
    try {
        let pedido = {
            pers_id:pedidos.persId,
            ped_id:pedidos.pedId,
            ped_fecha: new Date(),
            ped_valor:pedidos.pedValor,
            ped_descuento: pedidos.pedDescuento,
            id_vendedor:pedidos.idVendedor,
            ped_estado: pedidos.pedEstado,
            mesa_id: pedidos.mesaId
        }
        const pedidoCreated=await models.pedido.create(pedido,{transaction: t})
        if(!pedidoCreated){
            t.rollback()
            pedidos.error='Error registrando el pedido'
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

export const eliminarpedidos= async(pedidos)=>{
    const t= await models.sequelize.transaction()
    try {
        const rowsDeleted=await models.pedido.destroy({
            where:{
                ped_id:pedidos.pedId
            },
            transaction:t
        })
        if(rowsDeleted!==1){ 
            pedidos.error='Error eliminando pedido'
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


export const consultarpedido = async (pedidos)=>{
    try {
      const pedido=await models.pedido.findOne({
        where:{
          ped_id: pedidos.pedId
        }
      })
      if(!pedido){
        return []
      }

      let pedid ={
            persId:pedido.pers_id,
            pedId:pedido.ped_id,
            pedFecha: pedido.ped_fecha,
            pedValor:pedido.ped_valor,
            pedDescuento: pedido.ped_descuento,
            idVendedor:pedido.id_vendedor,
            pedEstado: pedido.ped_estado,
            mesaId: pedido.mesa_id
      }
     // return Object.entries(libron)
       return  [pedid]
    
        
      
    } catch (error) {
      console.log(error)
    }
    return []
  }

// FUNCIONALIDAD
export const listarFuncionalidad = async ()=>{
    try {
        const listarFuncionalidad = await  models2.funcionalidad.findAll()
        return listarFuncionalidad.map(funcionalidad=>({
         funcId:funcionalidad.func_id,
         funcNombre: funcionalidad.func_nombre,
         funcDesc:funcionalidad.func_descrip,
         funcIcn:funcionalidad.func_icono,
         funcUrl:funcionalidad.func_url,
         funcOrdn:funcionalidad.func_orden,
         funcTp:funcionalidad.func_tipo
        }))
     } catch (error) {
        console.log(error)
    } 

    return []
}
export const registrarfuncionalidad=async(funcionalidades)=>{
    const t= await models2.sequelize.transaction()
    try {
        let funcionalidad ={
            func_id:funcionalidades.funcId,
            func_nombre:funcionalidades.funcNombre,
            func_descrip:funcionalidades.funcDesc,
            func_icono:funcionalidades.funcIcn,
            func_url:funcionalidades.funcUrl,
            func_orden:funcionalidades.funcOrdn,
            func_tipo:funcionalidades.funcTp
        }
        const funcionalidadCreated=await models2.funcionalidad.create(funcionalidad,{transaction: t})
        if(!funcionalidadCreated){
            t.rollback()
            funcionalidad.error='Error registrando la funcionalidad'
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
export const eliminarfuncionalidades= async(funcionalidad)=>{
    const t= await models2.sequelize.transaction()
    try {
        const rowsDeleted=await models2.funcionalidades.destroy({
            where:{
                func_id:funcionalidad.funcId
            },
            transaction:t
        })
        if(rowsDeleted!==1){ 
            funcionalidad.error='Error eliminando funcionalidad'
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
export const modificarfuncionalidad=async(funcionalidad)=>{
    const t= await models2.sequelize.transaction()
    try {
        console.log(funcionalidad.funcId)
        
        let funcionalidades ={
            func_id:funcionalidad.funcId,
            func_nombre:funcionalidad.funcNombre,
            func_descrip:funcionalidad.funcDesc,
            func_icono:funcionalidad.funcIcn,
            func_url:funcionalidad.funcUrl,
            func_orden:funcionalidad.funcOrdn,
            func_tipo:funcionalidad.funcTp

        }
        const funcionalidadafectado= await models2.funcionalidades.update(funcionalidades,{
            where:{
                func_id: funcionalidad.funcId
            },
            transaction:t
        })
        if(funcionalidadafectado.length!==1){
            funcionalidad.error='Ocurrió un error actualizando los datos de la funcionalidad'
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

// CUENTA Y REGISTRAR PERSONA
  
  export const registrarpersonaH = async (personaN)=>{
  
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
  
      const personaCreated= await models2.persona.create(persona, { transaction:t })
  
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
  