import express from 'express'

import Fachada from '../fachada/fachada-general'

const router = express.Router()

router.post('/register',async (req,res,next) =>{
    console.log('HOLAAAAAAAAAAAAAAA')
    try {
        let persona=req.body
        
        if(await Fachada.registrarpersona(persona)){
            return res.status(200).send({msg:'Libro registrado correctamente'})
        }else{
            return res.status(500).send({msg: 'Error registrando libro'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})
    }
})
export default router
