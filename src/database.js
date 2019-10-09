const mongoose = require('mongoose')
const user ="ArAgenda19"
const pass =  "Mh4DmNlKfoqucjVK"
const db = "agenda"
const uri = `mongodb+srv://${user}:${pass}@cluster0-zx4ma.mongodb.net/${db}?retryWrites=true&w=majority`
mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true })
  .then( db => {
    console.log('Conectado a la Base de Datos')
  })
  .catch( error => {
    console.log('error: ', error)
  })

  module.exports = mongoose

 // 

