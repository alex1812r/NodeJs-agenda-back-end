const mongoose = require('mongoose')
const { Schema } = mongoose

//definir el esquema ( como van a lucir los datos )
const Contacto = new Schema({
  nombre: String,
  apellido: String,
  telefono: String,
  correo: String,
  direccion: String
})

module.exports = mongoose.model('contactos',Contacto)