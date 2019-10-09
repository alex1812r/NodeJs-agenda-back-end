const Contacto = require('../models/Contacto')

exports.getAll = async (req,res) => {
  const contactos = await Contacto.find()
  res.json(contactos)
}

exports.get = async (req,res) => {
  const contacto = await Contacto.findById(req.params.id, function(err){ 
    if(err){
      return res.json({error: 'Error al buscar contacto'})
    }
  }).limit(1)
  res.json(contacto)
}

exports.create = async(req,res) => {
  let errores = []
  if(req.body.nombre === '' || !req.body.nombre){
    errores.push({error: 'Nombre Requerido'})
  }
  if(req.body.apellido === '' || !req.body.apellido){
    errores.push({error: 'Apellido Requerido'})
  }
  if(req.body.telefono === '' || !req.body.telefono){
    errores.push({error: 'Telefono Requerido'})
  }
  if(req.body.correo === '' || !req.body.correo){
    errores.push({error: 'Correo Requerido'})
  }
  if(req.body.direccion === '' || !req.body.direccion){
    errores.push({error: 'Direccion Requerida'})
  }
  
  if(errores.length){
      res.json({Ok: false, errores})

  }else{
    
      const contacto = new Contacto(req.body)
      await contacto.save()
      res.json({ Ok: true , mensaje: 'contacto agregado' })
  }
}


exports.delete = async (req,res) => {
  await Contacto.findByIdAndRemove(req.params.id ,function(err){ 
    if(err){
      return res.json({Ok:false, error: 'error al eliminar contacto'})
    }
  })
  res.json({ status: 'Contacto eliminado' })
}

exports.update = async (req,res) => {
  let errores = []
  if(req.body.nombre === '' || !req.body.nombre){
    errores.push({error: 'Nombre Requerido'})
  }
  if(req.body.apellido === '' || !req.body.apellido){
    errores.push({error: 'Apellido Requerido'})
  }
  if(req.body.telefono === '' || !req.body.telefono){
    errores.push({error: 'Telefono Requerido'})
  }
  if(req.body.correo === '' || !req.body.correo){
    errores.push({error: 'Correo Requerido'})
  }
  if(req.body.direccion === '' || !req.body.direccion){
    errores.push({error: 'Direccion Requerida'})
  }
  
  if(errores.length){
      res.json({Ok: false, errores})

  }else{
    await Contacto.findByIdAndUpdate(req.params.id, req.body,function (err) {
      if(err){
        res.json({Ok: false, error: 'Error al actualizar contacto'})
      }
    })
    res.json({ status: 'Contacto guardado' })
  }
}