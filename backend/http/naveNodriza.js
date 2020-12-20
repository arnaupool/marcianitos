const express = require('express')
const db = require('../model/naveNodriza.js')
const http = express.Router()

//Leer
http.get('/', async function(req, res, next) {
    try {
        let datos = await db.get_naveNodriza()
        res.json(datos)
    } catch (error) {
        next(error)
    }
})

//Crear
// suponemos que tenemos req.body de id, nombre
http.post('/', async function(req, res, next) {
    try {
        let { id, nombre } = req.body;
        let datos = await db.create_naveNodriza(id, nombre)
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