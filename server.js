const express = require('express')
const mongoose = require('mongoose')
const app = express()
const pointRoutes = require('./routes/pointRoutes')
const SERVER_PORT = process.env.SERVER_PORT || 5000
require('dotenv').config()

// home route
app.get('/', (req, res) => {
    res.send("Group Assignment")
})

app.use('/api/v1', pointRoutes)

// Connecting to the mongo db 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
        console.log("Connection open!!")
    }).catch((err) => {
        console.log("Error: " + err)
    })

// listing at port 3000
app.listen(SERVER_PORT, () => {
    console.log(`Server listining to http://localhost:${SERVER_PORT}`)
})
