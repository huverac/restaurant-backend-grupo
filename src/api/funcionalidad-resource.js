import express from 'express'

import Fachada from '../fachada/fachada-general'

const router = express.Router()

router.get('/list',async(req,res, next)=>{
    try {
        const list= await Fachada.listarFuncionalidad()
        return res.status(200).send(list)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error de servidor')
    }
})

router.post('/register',async (req,res,next) =>{
    try {
        let funcionalidad=req.body
        
        if(await Fachada.registrarfuncionalidad(funcionalidad)){
            return res.status(200).send({msg:'Funcionalidad registrada correctamente'})
        }else{
            return res.status(500).send({msg: printString(funcionalidad.error,'Error registrando funcionalidad')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})
    }

})
router.post('/del', async(req,res,next)=>{
    try {
        let funcId=req.body.funcId
        if(!funcId){
            return res.status(400).send({ msg:'Petición no válida'})
        }
        let funcionalidad={
            funcId: funcId,
            funcNombre:funcNombre,
            funcDesc:funcDesc,
            funcIcn:funcIcn,
            funcUrl:funcUrl,
            funcOrdn:funcOrdn,
            funcTp:funcTp

        }
        if(Fachada.eliminarfuncionalidad(funcionalidad)){
            return res.status(200).send({msg: 'Funcionalidad eliminada correctamente'})
        }else{
            return res.status(500).send({ msg: printString(funcionalidad.error,'Error eliminando el funcionalidad')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
router.post('/update',async(req,res,next)=>{
    try {
        let funcionalidad=req.body
     
        if(Fachada.modificarfuncionalidad(funcionalidad)){
            return res.status(200).send({msg: 'funcionalidad modificada correctamente'})
        }else{
            return res.status(500).send({ msg: printString(funcionalidad.error,'Error no modifico la funcionalidad')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
router.post('/consultar', async (req, res, next) => {
    try {
        const funcId=req.body.funcId
        console.log(funcId + 'hola que hace')
        if(!funcId){
            res.status(200).send({msg:'peticion no valida'})
        }
        let funcionalidades={
            funcId: funcId
        }
        const func=await Fachada.consultarfuncionalidad(funcionalidades)
        if(!func){
            res.status(500).send(funcId.error, {msg:'ocurrio un error'}) 
        }
         return res.status(200).send(func)     
    } catch (error) {
        console.log(error)
        return res.status(500).send('error en el servidor')        
    }
})
export default router
