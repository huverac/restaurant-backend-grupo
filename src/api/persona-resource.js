import express from 'express'

import Fachada from '../fachada/fachada-general'

const router = express.Router()

router.get('/list',async(req,res, next)=>{
    try {
        const list= await Fachada.listarpersonas()
        return res.status(200).send(list)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error de servidor')
    }
})

router.post('/register',async (req,res,next) =>{
    try {
        let Personas=req.body
        
        if(await Fachada.registrarpersonaH(Personas)){
            return res.status(200).send({msg:'persona registrada correctamente'})
        }else{
            return res.status(500).send({msg: printString(Personas.error,'Error registrando Persona')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})
    }

})
router.post('/registerpers',async (req,res,next) =>{
    try {
        let Personas=req.body
        
        if(await Fachada.registrarpersonacuenta(Personas)){
            return res.status(200).send({msg:'Persona registrada correctamente'})
        }else{
            return res.status(500).send({msg: printString(Personas.error,'Error registrando Persona')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})
    }

})
router.post('/del', async(req,res,next)=>{
    try {
        let ingrCedula=req.body.ingrCedula
        if(!ingrCedula){
            return res.status(400).send({ msg:'Petición no válida'})
        }
        let Personas={
            ingrCedula: ingrCedula
        }
        if(Fachada.eliminarPersona(Personas)){
            return res.status(200).send({msg: 'Persona eliminada correctamente'})
        }else{
            return res.status(500).send({ msg: printString(persona.error,'Error eliminando la persona')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
router.post('/update',async(req,res,next)=>{
    try {
        let personas=req.body
     
        if(Fachada.modificarPersonas(personas)){
            return res.status(200).send({msg: 'persona modificado correctamente'})
        }else{
            return res.status(500).send({ msg: printString(personas.error,'Error no modifico la persona')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
router.post('/consultar', async (req, res, next) => {
    try {
        const ingrCedulas=req.body.ingrCedula
        console.log(ingrCedulas + 'hola que hace')
        if(!ingrCedulas){
            res.status(200).send({msg:'peticion no valida'})
        }
        let persona={
            ingrCedula: ingrCedulas
        }
        const pers=await Fachada.consultarPersona(persona)
        if(!pers){
            res.status(500).send(ingrCedula.error, {msg:'ocurrio un error'}) 
        }
         return res.status(200).send(pers)     
    } catch (error) {
        console.log(error)
        return res.status(500).send('error en el servidor')        
    }
})
export default router