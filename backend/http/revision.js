const express = require('express')
const db = require('../model/revision.js')
const http = express.Router()

//Leer todas las revisiones
http.get('/', async function(req, res, next) {
    try {
        let datos = await db.get_revisiones()
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Leer las revisiones de cierta aeronave
http.get('/revisionAeronave/:idAeronave', async function(req, res, next) {
    try {
        let { idAeronave } = req.params;
        let datos = await db.get_revisionesAeronave(idAeronave)
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Crear
// suponemos que tenemos req.body de id, nombreRevisor, idAeronave, fecha
http.post('/', async function(req, res, next) {
    try {
        let { id, nombreRevisor, fecha, idAeronave } = req.body;
        let datos = await db.create_revision(id, nombreRevisor, fecha, idAeronave)
        res.json({ msg: "CREADO" });
    } catch (error) {
        if (error.code && error.code == 'ER_DUP_ENTRY') {
            res.json({ msg: "ID_DUPLICADO" });
        } else if (error.code && error.code == 'ER_DUP_ENTRY' && error.sqlMessage.includes("revision_UN")) {
            res.send({ msg: "FECHA_DUPLICADA" });
        } else {
            next(error);
        }
    }
})

module.exports = http