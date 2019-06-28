import express from 'express'

import Fachada from '../fachada/fachada-general'

const router = express.Router()

router.get('/list',async(req,res, next)=>{
    try {
        const list= await Fachada.listaringredientes()
        return res.status(200).send(list)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error de servidor')
    }
})

router.post('/register',async (req,res,next) =>{
    try {
        let ingredientes=req.body
        
        if(await Fachada.registraringredientes(ingredientes)){
            return res.status(200).send({msg:'ingrediente registrado correctamente'})
        }else{
            return res.status(500).send({msg: printString(ingredientes   .error,'Error registrando ingrediente')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})
    }

})
router.post('/del', async(req,res,next)=>{
    try {
        let ingrId=req.body.ingrId
        if(!ingrId){
            return res.status(400).send({ msg:'Petición no válida'})
        }
        let ingredientes={
            ingrId: ingrId

        }
        if(Fachada.eliminaringredientes(ingredientes)){
            return res.status(200).send({msg: 'Ingrediente eliminado correctamente'})
        }else{
            return res.status(500).send({ msg: printString(ingredientes.error,'Error eliminando el Ingredientes')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
router.post('/update',async(req,res,next)=>{
    try {
        let ingredientes=req.body
     
        if(Fachada.modificaringrediente(ingredientes)){
            return res.status(200).send({msg: 'ingrediente modificado correctamente'})
        }else{
            return res.status(500).send({ msg: printString(ingredientes.error,'Error no modifico el ingrediente')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
router.post('/consultar', async (req, res, next) => {
    try {
        const ingrId=req.body.ingrId
        console.log(ingrId + 'hola que hace')
        if(!ingrId){
            res.status(200).send({msg:'peticion no valida'})
        }
        let ingrediente={
            ingrId: ingrId
        }
        const ingre=await Fachada.consultaringrediente(ingrediente)
        if(!ingre){
            res.status(500).send(ingrId.error, {msg:'ocurrio un error'}) 
        }
         return res.status(200).send(ingre)     
    } catch (error) {
        console.log(error)
        return res.status(500).send('error en el servidor')        
    }
})
export default router
