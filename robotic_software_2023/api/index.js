const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const port = 5000
const cors = require('cors')

const app = require('express')();
const http = require('http').Server(app);
// const io = require('socket.io')(http);
http.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// io.on('connection', function(socket) {
//     console.log('A user connected');
//
//     //Whenever someone disconnects this piece of code executed
//     socket.on('disconnect', function () {
//         console.log('A user disconnected');
//     });
// });

app.use(cors())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/users/', db.getUsers)

app.get('/currentround/', db.getCurrentTeams)
app.get('/currentround/:id', db.getCurrentTeamsById)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.put('/currentround/teams/:id', db.changeTeam)
app.put("/currentround/scores/:id", db.changeScore)

