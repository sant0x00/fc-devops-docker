const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) VALUES('John')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('Hello World...')
})

app.listen(port, () => {
    console.log(`Server running in port ${port}...`)
})
