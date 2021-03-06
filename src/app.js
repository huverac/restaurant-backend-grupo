import createError from 'http-errors'
import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

//import RolResource  from './api/rol-resource'
import IngredienteResource from './api/ingredientes-resource'
import PedidosResource from './api/pedidos-resource'
import FuncionalidadResource from './api/funcionalidad-resource'
import PersonaResource  from './api/persona-resource'

const app = express()

// enable CORS
app.use(cors())
app.options('*', cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//app.use('/api/libro', LibroResource)
app.use('/api/persona',PersonaResource)
app.use('/api/ingrediente',IngredienteResource)
app.use('/api/pedido',PedidosResource)
app.use('/api/funcionalidad',FuncionalidadResource)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
