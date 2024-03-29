const bodyParser = require('body-parser')
const db = require('./queries')
const cors = require('cors')

const app = require('express')();
const http = require('http')
const {Server} = require("socket.io")

app.use(cors())

const server = http.createServer(app)

const io = new Server(server)

server.listen(5000, () => {
    console.log("Server is running on port 5000")
})


io.on("connection", (socket) => {
    socket.on("changeScore", (data) => {
        console.log("please work")
        socket.broadcast.emit("receiveScoreUpdate", data)
    })

    socket.on("changeAllTeamScore", (data) => {
        console.log("broadcasted changeAllTeamScore")
        socket.broadcast.emit("receiveAllTeamScoreUpdate", data)
    })

    socket.on("changeTeam", (data) => {
        console.log("sent")
        socket.broadcast.emit("receiveTeamUpdate", data)
    })
    socket.on("changeDataAllTeams", (data) => {
        socket.broadcast.emit("receiveDataAllTeams", data)
    })
})


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/users/', db.getUsers)
app.get('/usersMoney/:id', db.getUserById)
app.get('/currentround/', db.getCurrentTeams)
app.get('/currentround/:id', db.getCurrentTeamsById)
app.get('/items/', db.getAllItems)
app.get('/items/:id', db.getItemData)
app.get('/teamidByPwd/:id', db.getTeamByPassword)

app.put('/currentround/teams/:id', db.changeTeam)
app.put("/currentround/scores/:id", db.changeScore)

app.post('/purchase/', db.purchaseItem)
app.post('/refund/', db.refundItem)

