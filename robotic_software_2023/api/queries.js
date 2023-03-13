const {errorMonitor} = require("ws");
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'jojox',
    host: 'localhost',
    database: 'robotcomp',
    password: 'grc',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM teams', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCurrentTeams = (request, response) => {

    pool.query('SELECT * FROM currentround', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCurrentTeamsById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM currentround WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}



const changeTeam = (request, response) => {
    const {displayID, newTeam, finalAmountOfPoints, currentTeam} = request.body
    const id = parseInt(request.params.id)
    console.log("id",id, "displayid", displayID, "teamname", newTeam)

    pool.query(
        `UPDATE teams SET amountofpoints = $1 WHERE teamname=$2`, [finalAmountOfPoints, currentTeam],
        (error, result) => {
            if (error) {
                throw error
            }
            console.log("potato")
            response.status(200).end("added points to the teams table")
        }
    )

    pool.query(
        'UPDATE currentround SET teamname=$1, amountofpoints=$2 WHERE id=$3', [newTeam, 0, displayID + 1],
        (error, result) => {
            if (error) {
                throw error
            }
            console.log("potato potato")
            response.status(200).end('done update teamDisplay')
        }
    )
}

const changeScore = (request, response) => {
    const {newScore} = request.body
    const id = parseInt(request.params.id)
    console.log("id", id)

    if (newScore < 0) {
        throw new Error("cannot have negative points")
    }

    pool.query(
        `UPDATE currentround SET amountofpoints = $1 WHERE id=$2`, [newScore, id],
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).end("done update scores")
        }
    )
}

module.exports = {
    getUsers,
    getCurrentTeams,
    getCurrentTeamsById,
    changeTeam,
    changeScore
}