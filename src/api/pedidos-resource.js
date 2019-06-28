import express from 'express'

import Fachada from '../fachada/fachada-general'

const router = express.Router()

router.get('/list',async(req,res, next)=>{
    try {
        const list= await Fachada.listarPedidos()
        console.log("se trajo los datos")
        return res.status(200).send(list)
    } catch (error) {
        console.log(error)
        console.log("se totio")
        return res.status(500).send('Error de servidorr')
    }
})

router.post('/register',async (req,res,next) =>{
    try {
        let pedidos=req.body
        
        if(await Fachada.registrarpedidos(pedidos)){
            return res.status(200).send({msg:'pedido registrado correctamente'})
        }else{
            return res.status(500).send({msg: printString(libros.error,'Error registrando pedido')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:'Error del servidor'})
    }

})

router.post('/del', async(req,res,next)=>{
    try {
        let pedId=req.body.pedId
        if(!pedId){
            return res.status(400).send({ msg:'Petición no válida'})
        }
        let pedidos={
            pedId: pedId

        }
        if(Fachada.eliminarpedidos(pedidos)){
            return res.status(200).send({msg: 'Pedido eliminado correctamente'})
        }else{
            return res.status(500).send({ msg: printString(pedidos.error,'Error eliminando el pedido')})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Error del servidor'})
    }
})

router.post('/consultar', async (req, res, next) => {
    try {
        const pedId=req.body.pedId
        console.log("opedido numero")
        console.log(pedId)
        if(!pedId){
            res.status(200).send({msg:'peticion no valida'})
        }
        let pedido={
            pedId: pedId
        }
        const ped=await Fachada.consultarpedido(pedido)
        if(!ped){
            res.status(500).send(pedId.error, {msg:'ocurrio un error'}) 
        }
         return res.status(200).send(ped)     
    } catch (error) {
        console.log(error)
        return res.status(500).send('error en el servidor')        
    }
})


export default router