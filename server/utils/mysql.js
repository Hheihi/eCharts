const mysql = require('mysql')

let pool = mysql.createPool({

    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});

function query(sql, callback) {
    if (!sql) {
        callback();
        return;
    }
    pool.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        }
        callback(null, rows, fields);
    });
}

module.exports  = query
