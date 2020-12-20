const express = require('express')
const db = require('../model/marciano.js')
const http = express.Router()

//Leer
http.get('/marcianoNave/:idAeronave', async function(req, res, next) {
    try {
        let { idAeronave } = req.params;
        let datos = await db.get_marcianosAeronave(idAeronave)
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Leer
http.get('/idMarciano/:id', async function(req, res, next) {
    try {
        let { id } = req.params;
        let datos = await db.get_marciano(id)
        res.json(datos)
    } catch (error) {
        console.log(error);
        next(error)
    }
})

//Crear
// suponemos que tenemos req.body de id, nombre, idAeronave
http.post('/', async function(req, res, next) {
    try {
        let { id, nombre, idAeronave } = req.body;
        let datos = await db.create_marciano(id, nombre, idAeronave)
        res.json({ msg: "CREADO" });
    } catch (error) {
        if (error.code && error.code == 'ER_DUP_ENTRY') {
            res.json({ msg: "ID_DUPLICADO" });
        } else {
            next(error);
        }
    }
})

//Modificar
http.put('/', async function(req, res, next) {
    try {
        let { id, idAeronave } = req.body;
        let datos = await db.set_marcianosAeronave(id, idAeronave)
        res.json({ msg: "MODIFICADO" });
    } catch (error) {
        next(error);
    }
})

module.exports = http