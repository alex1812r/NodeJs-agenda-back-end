const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
//crear aplicacion
const app = express()

//Conectar con la base de datos
mongoose.connect('mongodb://localhost/test')
  .then( db => {
    console.log('Conectado a la Base de Datos')
  })
  .catch( error => {
    console.log('error: ', error)
  })

//SETTINGS
app.set('port', process.env.PORT || 3000) //puerto de la aplicacion

//MIDLEWARES(
app.use(morgan('dev')) //ver peticiones por consola
app.use(express.json()) //aceptar peticiones tipo json
//ROUTER
app.use('/api/agenda',require('./routes/Agenda')) //rutas de la aplicacion


//SERVER LISTENING
app.listen(app.get('port'),() => {
  console.log('server on port: ', app.get('port'))
})
