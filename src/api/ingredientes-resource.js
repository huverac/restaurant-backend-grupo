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
export default router
