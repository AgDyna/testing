import express from 'express'
import mysql from 'mysql'

const port = 4000

const app = express()
// mySql DB
const connection = mysql.createConnection({
  host: process.env.Host || 'localhost',
  port: process.env.MySql_Port || '3306',
  username: process.env.User || 'root',
  password: process.env.Password || '',
  database: process.env.Database || 'farmsured_php_testing',
})

// DB connection
connection.connect((err) => {
  if (err) {
    console.log(err)
    throw err
  }
  console.log('MySql Database Connected ')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Server at http://127.0.0.1:${port}`)
})
