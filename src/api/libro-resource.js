import express from 'express'

import Fachada from '../fachada/fachada-general'

const router = express.Router()

router.get('/list',async(req,res, next)=>{
    try {
        const list= await Fachada.listarlibros()
        return res.status(200).send(list)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error de servidor')
    }
})
router.post('/register',async (req,res,next) =>{
    console.log('HOLAAAAAAAAAAAAAAA')
    try {
        let libros=req.body
        
        if(await Fachada.registrarpersona(persona)){
            return res.status(200).send({msg:'Libro registrado correctamente'})
        }else{
            return res.status(500).send({msg: printString(persona.error,'Error registrando libro')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})
    }

})
router.post('/del', async(req,res,next)=>{
    try {
        let librId=req.body.librId
        if(!librId){
            return res.status(400).send({ msg:'Petición no válida'})
        }
        let libros={
            librId: librId
        }
        if(Fachada.eliminarLibro(libros)){
            return res.status(200).send({msg: 'Libro eliminado correctamente'})
        }else{
            return res.status(500).send({ msg: printString(libros.error,'Error eliminando el libro')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
router.put('/modificar', async (req,res, next)=>{
    try {
        let libros=req.body
        if(await Fachada.modificarLibro(libros)){
            return res.status(200).send({msg:'Libro modificado correctamente'})
        }else{
            return res.status(500).send({msg: printString(libros.error,'Error modificando el libro')})
        }

    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})

    }
})
router.post('/mofi',async(req,res,next)=>{
    try {
        let librId=req.body.librId
        if(!librId){
            return res.status(400).send({ msg:'Petición no válida'})
        }
        let libros={
            librId: librId
        }
        if(Fachada.mofiLibros(libros)){
            return res.status(200).send({msg: 'Libro mofi correctamente'})
        }else{
            return res.status(500).send({ msg: printString(libros.error,'Error no mofi el libro')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})
export default router
