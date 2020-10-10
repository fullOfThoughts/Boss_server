const mysql = require('mysql')
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '123456',
})

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    connect.query(data.sql, function (err, res) {
      err ? reject(err) : resolve(res)
    })
    connect.end()
  })
}
