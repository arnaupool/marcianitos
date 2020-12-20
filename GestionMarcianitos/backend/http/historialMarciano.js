const express = require('express')
const db = require('../model/historialMarciano.js')
const http = express.Router()

//Leer los marcianos de cierta revision
http.get('/historialRevision/:idRevision', async function(req, res, next) {
    try {
        let { idRevision } = req.params;
        let datos = await db.get_marcianosRevision(idRevision)
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Leer las revisiones de un marciano
http.get('/historialMarciano/:idMarciano', async function(req, res, next) {
    try {
        let { idMarciano } = req.params;
        let datos = await db.get_marcianosAeronave(idMarciano)
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Crear
// suponemos que tenemos req.body de idMarciano, idRevision
http.post('/', async function(req, res, next) {
    try {
        let { idMarciano, idRevision } = req.body;
        let datos = await db.create_marcianoHistorial(idMarciano, idRevision)
        res.end()
    } catch (error) {
        next(error)
    }
})
module.exports = http