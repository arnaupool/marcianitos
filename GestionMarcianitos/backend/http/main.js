const express = require('express')
const cors = require('cors')
const http = express()
let port = 8000

/*http.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
})*/

http.use(cors());

http.use(express.json());

// aeronave
http.use('/aeronave', require('./aeronave.js'));

// nave nodriza
http.use('/naveNodriza', require('./naveNodriza.js'));

// marciano
http.use('/marciano', require('./marciano.js'));

// revision
http.use('/revision', require('./revision.js'));

// historial
http.use('/historialMarciano', require('./historialMarciano.js'));

http.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})