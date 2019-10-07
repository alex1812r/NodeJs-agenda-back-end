const express = require('express')
const morgan = require('morgan')
const db = require('./database')
//crear aplicacion
const app = express()
const cors = require('cors')

//SETTINGS
app.set('port', process.env.PORT || 5000) //puerto de la aplicacion

//MIDLEWARES(
app.use(morgan('dev')) //ver peticiones por consola
app.use(express.json()) //aceptar peticiones tipo json
app.use(cors())

//ROUTER
app.use('/',require('./routes/Agenda')) //rutas de la aplicacion


//SERVER LISTENING
app.listen(app.get('port'),() => {
  console.log('server on port: ', app.get('port'))
})
