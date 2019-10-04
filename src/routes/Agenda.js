const express = require('express')
const router = express.Router()

const Agenda = require('../controllers/Agenda')

router.get('/', Agenda.getAll),

router.get('/:id', Agenda.get)

router.post('/', Agenda.create)

router.delete('/:id', Agenda.delete)

router.put('/:id', Agenda.update)

module.exports = router