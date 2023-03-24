// const {errorMonitor} = require("ws");
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'jojox',
    host: 'localhost',
    database: 'postgres',
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
            response.status(200).end("added points to the teams table")
        }
    )

    pool.query(
        'UPDATE currentround SET teamname=$1, amountofpoints=$2 WHERE id=$3', [newTeam, 0, displayID + 1],
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).end('done update teamDisplay')
        }
    )
}

const changeScore = (request, response) => {
    const {newScore} = request.body
    const id = parseInt(request.params.id)
    console.log("id", id, "changeScore")

    if (newScore < 0) {
        throw new Error("cannot have negative points")
    }

    pool.query(
        `UPDATE currentround SET amountofpoints = $1 WHERE id=$2`, [newScore, id + 1],
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).end("done update scores")
        }
    )
}

const purchaseItem = (request, response) => {
    const {school, item, amount} = request.body

    pool.query(
        `INSERT INTO purchases (teamname, itemname, amount) VALUES ($1, $2, $3)`, [school, item, amount],
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).end("inserted purchase into DB")
        }
    )
    console.log(`past first query, purchaseItem`)

    pool.query(
        `UPDATE teams SET amountofmoney=amountofmoney-100 WHERE teamname='team1'`,
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).end("updated teams")
        }
    )
}

const getAllItems = (request, response) => {
    pool.query(
        `SELECT * FROM items`,
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).json(result.rows)
        }
    )
}

module.exports = {
    getUsers,
    getCurrentTeams,
    getAllItems,
    getCurrentTeamsById,
    changeTeam,
    changeScore,
    purchaseItem
}