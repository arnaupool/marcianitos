let query = require('../connection_db.js')
const x = {}

//Listar aeronaves
x.get_Aeronaves = function() {
    return query('SELECT ID as id, Nombre as nombre, max_Marcianos as max, naveOrigen as origen, naveDestino as destino FROM aeronave', [])
}

//Listar aeronaves
x.get_Aeronave = function(idAeronave) {
    return query('SELECT ID as id, Nombre as nombre, max_Marcianos as max, naveOrigen as origen, naveDestino as destino FROM aeronave WHERE ID = ?', [
        idAeronave
    ])
}

//Crear aeronave
x.create_aeronave = function(id, nombre, max, nOrigen, nDestino) {
    return query('INSERT INTO aeronave VALUES (?,?,?,?,?)', [
        id, nombre, max, nOrigen, nDestino
    ])
}

module.exports = x