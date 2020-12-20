let query = require('../connection_db.js')
const x = {}

//Listar naves Nodrizas
x.get_naveNodriza = function() {
    return query('SELECT ID as id, Nombre as nombre FROM `nave nodriza` ', )
}

//Crear nave Nodriza
x.create_naveNodriza = function(id, nombre) {
    return query('INSERT INTO `nave nodriza` VALUES (?,?)', [
        id, nombre
    ])
}

module.exports = x