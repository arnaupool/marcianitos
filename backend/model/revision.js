let query = require('../connection_db.js')
const x = {}

//Listar revisiones de cierta Aeronave
x.get_revisionesAeronave = function(idAeronave) {
    //return query('SELECT revision.ID, revision.Fecha, revision.AeronaveRevisada, `historial marciano`.Marciano FROM revision JOIN `aeronave` ON `historial marciano`.Revision = revision.ID WHERE revision.AeronaveRevisada = ?', [
    return query('SELECT ID as id, nombreRevisor, Fecha as fecha, AeronaveRevisada as idAeronave FROM revision WHERE revision.AeronaveRevisada = ?', [
        idAeronave
    ])
}

//Listar revisiones 
x.get_revisiones = function() {
    return query('SELECT revision.ID as id, revision.nombreRevisor, revision.Fecha as fecha, revision.AeronaveRevisada as idAeronave, aeronave.Nombre as nombre FROM revision JOIN aeronave ON aeronave.ID = revision.AeronaveRevisada', [])
        //return query('SELECT ID as id, nombreRevisor, Fecha as fecha, AeronaveRevisada as idAeronave FROM revision', [])
}

//Crear revision
x.create_revision = function(id, nombreRevisor, fecha, idAeronave) {
    return query('INSERT INTO revision VALUES (?,?,?,?)', [
        id, nombreRevisor, fecha, idAeronave
    ])
}

module.exports = x