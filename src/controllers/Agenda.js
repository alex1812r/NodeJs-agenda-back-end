const Contacto = require('../models/Contacto')

exports.getAll = async (req,res) => {
  const contactos = await Contacto.find()
  res.json(contactos)
}

exports.get = async (req,res) => {
  const contacto = await Contacto.findById(req.params.id)
  res.json(contacto)
}

exports.create = async(req,res) => {
  const contacto = new Contacto(req.body)
  await contacto.save()
  res.json({ status: 'contacto agregado' })
}


exports.delete = async (req,res) => {
  await Contacto.findByIdAndRemove(req.params.id)
  res.json({ status: 'Contacto eliminado' })
}

exports.update = async (req,res) => {
  await Contacto.findByIdAndUpdate(req.params.id, req.body)
  res.json({ status: 'Contacto guardado' })
}