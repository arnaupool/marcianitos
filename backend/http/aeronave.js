const express = require('express')
const db = require('../model/aeronave.js')
const http = express.Router()

//Leer
http.get('/', async function(req, res, next) {
    try {
        let datos = await db.get_Aeronaves()
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Leer aeronave con tal id
http.get('/nave/:idAeronave', async function(req, res, next) {
    try {
        let { idAeronave } = req.params;
        let datos = await db.get_Aeronaves(idAeronave)
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Crear
// suponemos que tenemos req.body de id, nombre, origen, destino
http.post('/', async function(req, res, next) {
    try {
        let { id, nombre, max, origen, destino } = req.body;
        let datos = await db.create_aeronave(id, nombre, max, origen, destino)
        res.json({ msg: "CREADO" });
    } catch (error) {
        if (error.code && error.code == 'ER_DUP_ENTRY') {
            res.json({ msg: "ID_DUPLICADO" });
        } else {
            next(error);
        }
    }
})

module.exports = http