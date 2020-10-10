const mysql = require('mysql')

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    const connect = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: '3306',
      password: '123456',
      database: data.dataBase,
    })
    connect.query(data.sql, function (err, res) {
      err ? reject(err) : resolve(res)
    })
    connect.end()
  })
}
