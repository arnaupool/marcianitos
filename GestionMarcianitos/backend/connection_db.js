let sql = require("mysql");
let con = sql.createConnection({
    host:'daemida.myddns.rocks',
    user:'themartian',
    password:'marcianos',
    database:'marcianos'
});
function query(query, params) {
    return new Promise((resolve, reject) => {
        con.query(query, params, (err, results) => {
            if(err) reject(err);
            else{
                resolve(results);
            }
        })
    })
}
module.exports = query;