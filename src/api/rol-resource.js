import express from 'express'

import Fachada from '../fachada/fachada-general'

const router = express.Router()

router.get('/insertar', async function (req, res, next){
    try {
        const resp= await Fachada.insertar_rol()
        if(resp){
            res.status(200).send('Registro exitoso')
        }else{
            res.status(500).send('Error al registrar rol')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Error interno de servidor')
    }
})
export default router